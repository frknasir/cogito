<?php

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use App\Mail\ApplyForMembershipMail;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
    /**
     * User Routes
     */
    Route::get('/user', 'UserController@authenticatedUser');
    Route::get('/users', 'UserController@index');
    Route::get('/user/{id}', 'UserController@show');
    Route::post('/user', 'UserController@store');
    Route::put('/user', 'UserController@update');
    Route::put('/user/{id}/changePassword', 'UserController@changeUserPassword');
    Route::delete('/user', 'UserController@destroy');
    /**
     * End User Routes
     */

    /**
     * Config Routes
     */
    Route::group(['prefix' => 'config'], function() {
        Route::post('/', 'ConfigController@update');
    });
    /**
     * End Config Routes
     */
});

Route::group(['prefix'=> 'v1'], function() {

    /**
     * Newsletter Routes
     */
    Route::group(['prefix' => 'newsletter'], function() {
        Route::get(
            '/',
            'NewsletterController@index'
        );
        Route::post(
            '/',
            'NewsletterController@store'
        );
        Route::delete(
            '/',
            'NewsletterController@destroy'
        );
    });
    /**
     * End Newsletter Routes
     */
    
    /**
     * User and Roles routes
     */
    Route::get(
        '/roles',
        'RoleController@index'
    );
    /**
     * end User x Roles routes
     */

    /**
     * Post Routes
     */
    Route::get(
        '/posts/limit/{limit}', 
        'BlogController@getPosts'
    );

    /**
     * Mail Routes
     */
    Route::group(['prefix' => 'mail'], function() {
        Route::post('/contact', function(Request $request) {
            Mail::send(new ContactMail($request));
            return response()->json([
                'success' => 1
            ]);
            
            //return (new ContactMail($request))->render();
        });
        Route::post('/apply-for-membership', function(Request $request) {
            Mail::send(new ApplyForMembershipMail($request));
            return response()->json([
                'success' => 1
            ]);
            //return (new ApplyForMembershipMail($request))->render();
        });
    });
    /**
     * End Mail Routes
     */

     /**
     * Config Routes
     */
    Route::group(['prefix' => 'config'], function() {
        Route::get('/', 'ConfigController@index');
    });
    /**
     * End Config Routes
     */
});
