<?php

namespace App\Http\Controllers;

use Canvas\Tag;
use Canvas\Post;
use Canvas\Topic;
use Illuminate\View\View;
use Canvas\Events\PostViewed;

class BlogController extends Controller
{
	/**
     * return posts
     */
    public function getPostsTAPI($limit) {
        $posts = Post::published()->orderByDesc('published_at')->paginate($limit);
        return $posts;
	}
	
    /**
     * Show the blog index page.
     *
     * @return View
     */
    public function getPosts(): View
    {
        $data = [
            'posts'  => Post::published()->orderByDesc('published_at')->simplePaginate(10),
            'topics' => Topic::all(['name', 'slug']),
            'tags'   => Tag::all(['name', 'slug']),
        ];

        return view('blog.index', compact('data'));
    }

    /**
     * Show a post given a slug.
     *
     * @param string $slug
     * @return View
     */
    public function findPostBySlug(string $slug): View
    {
        $posts = Post::with('tags', 'topic')->published()->get();
        $post = $posts->firstWhere('slug', $slug);

        if (optional($post)->published) {
            $next = $posts->sortBy('published_at')->firstWhere('published_at', '>', optional($post)->published_at);

            $filtered = $posts->filter(function ($value, $key) use ($slug, $next) {
                return $value->slug != $slug && $value->slug != optional($next)->slug;
            });

            if ($post->tags->isNotEmpty()) {
                $related = Post::where('id', '!=', $post->id)
                    ->where('id', '!=', optional($next)->id)
                    ->whereHas('tags', function ($query) use ($post, $next) {
                        return $query->whereIn('name', $post->tags->pluck('slug'));
                    })->get();

                if ($related->isEmpty()) {
                    $random = $filtered->count() > 1 ? $filtered->random() : null;
                } else {
                    $random = $related->random();
                }
            } else {
                if ($filtered->isNotEmpty()) {
                    $filtered->random();
                }
                $random = null;
            }

            $data = [
                'author' => $post->author,
                'post'   => $post,
                'meta'   => $post->meta,
                'next'   => $next,
                'random' => $random,
                'topic'  => $post->topic->first() ?? null,
            ];

            event(new PostViewed($post));

            return view('blog.show', compact('data'));
        } else {
            abort(404);
        }
    }

    /**
     * Show all posts given a tag.
     *
     * @param string $slug
     * @return View
     */
    public function getPostsByTag(string $slug): View
    {
        if (Tag::where('slug', $slug)->first()) {
            $data = [
                'tag'    => Tag::with('posts')->where('slug', $slug)->first(),
                'tags'   => Tag::all(['name', 'slug']),
                'topics' => Topic::all(['name', 'slug']),
                'posts'  => Post::whereHas('tags', function ($query) use ($slug) {
                    $query->where('slug', $slug);
                })->published()->orderByDesc('published_at')->simplePaginate(10),
            ];

            return view('blog.index', compact('data'));
        } else {
            abort(404);
        }
    }

    /**
     * Show all posts given a topic.
     *
     * @param string $slug
     * @return View
     */
    public function getPostsByTopic(string $slug): View
    {
        if (Topic::where('slug', $slug)->first()) {
            $data = [
                'tags'   => Tag::all(['name', 'slug']),
                'topics' => Topic::all(['name', 'slug']),
                'topic'  => Topic::with('posts')->where('slug', $slug)->first(),
                'posts'  => Post::whereHas('topic', function ($query) use ($slug) {
                    $query->where('slug', $slug);
                })->published()->orderByDesc('published_at')->simplePaginate(10),
            ];

            return view('blog.index', compact('data'));
        } else {
            abort(404);
        }
    }
}
