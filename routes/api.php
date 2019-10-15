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

	/**
	 * Project Routes
	 */
	Route::group(['prefix' => 'project'], function () {
		Route::post('/', 'ProjectController@store');
		Route::put('/', 'ProjectController@update');
		Route::delete('/', 'ProjectController@destroy');
	});
	/**
	 * EndProject Routes
	 */

	/**
	 * Proficiency Routes
	 */
	Route::group(['prefix' => 'proficiency'], function () {
		Route::post('/', 'ProficiencyController@store');
		Route::put('/', 'ProficiencyController@update');
		Route::delete('/', 'ProficiencyController@destroy');
	});
	/**
	 * End Proficiency Routes
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
        'BlogController@getPostsTAPI'
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

	/**
	 * ProficiencyType Routes
	 */
	Route::group(['prefix' => 'proficiencyType'], function () {
		Route::get('/', 'ProficiencyTypeController@index');
	});
	/**
	 * End ProficiencyType Routes
	 */

	/**
	 * Proficiency Routes
	 */
	Route::group(['prefix' => 'proficiency'], function () {
		Route::get('/', 'ProficiencyController@index');
		Route::get('/{id}', 'ProficiencyController@show');
	});
	/**
	 * End Proficiency Routes
	 */

	 /**
	 * Project Routes
	 */
	Route::group(['prefix' => 'project'], function () {
		Route::get('/', 'ProjectController@index');
		Route::get('/{id}', 'ProjectController@show');
	});
	/**
	 * EndProject Routes
	 */
});
