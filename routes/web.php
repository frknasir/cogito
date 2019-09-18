<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get( '/', 'AppController@getApp' )->name('home');


Route::prefix('blog')->group(function () {
    Route::get('/', 'BlogController@index')->name('blog.index');
    Route::middleware('Canvas\Http\Middleware\ViewThrottle')->get('{slug}', 'BlogController@post')->name('blog.post');
    Route::get('tag/{slug}', 'BlogController@tag')->name('blog.tag');
    Route::get('topic/{slug}', 'BlogController@topic')->name('blog.topic');
});
