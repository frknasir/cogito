/*
|-------------------------------------------------------------------------------
| VUEX modules/post.js
|-------------------------------------------------------------------------------
| The Vuex data store for the post
*/

import PostAPI from '../api/post';

export const post = {
    state: {
        posts: [],
        postPagination: {},
        postsLoadStatus: 0
    },
    actions: {
        getPosts({ commit }, data) {
            commit('setPostsLoadStatus', 1);

            PostAPI.getPosts(
				data.limit,
                data.url
            ).then(function (response) {
                commit('setPostsLoadStatus', 2);
                commit('setPosts', response.data.data);
                commit('setPostPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function () {
                commit('setPostsLoadStatus', 3);
                commit('setPosts', []);
            });
        }
    },
    mutations: {
        setPostsLoadStatus(state, status) {
            state.postsLoadStatus = status;
        },

        setPosts(state, posts) {
            state.posts = posts;
        },

        setPostPagination(state, data) {
            let meta = data.meta;
            let links = data.links;

            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                to: meta.to,
                total: meta.total,
                next_page_url: links.next,
                prev_page_url: links.prev
            };

            state.postPagination = pagination;
        }
    },
    getters: {
        getPostsLoadStatus(state) {
            return state.postsLoadStatus;
        },

        getPosts(state) {
            return state.posts;
        },

        getPostPagination(state) {
            return state.postPagination;
        }
    }
};
