<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List posts
Route::get('posts', 'PostController@index');

// List single post
Route::get('posts/{id}', 'PostController@show');

// Create post
Route::post('posts', 'PostController@store');

// Update post
Route::put('posts/{id}', 'PostController@update');

// Delete post
Route::delete('posts/{id}', 'PostController@destroy');

// List categories
Route::get('categories', 'CategoriesController@index');

// List categories posts
Route::get('categories/{id}', 'CategoriesController@posts');
