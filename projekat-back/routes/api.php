<?php

use App\Http\Controllers\ReadListController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\WatchListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/comments/{anime}', [CommentController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('profile', function (Request $request) {
        return auth()->user();
    });
    Route::get('/profile/watchlist', [WatchListController::class, 'index']);
    Route::post('/profile/watchlist/{anime}', [WatchListController::class, 'store']);
    Route::delete('/profile/watchlist/{anime}', [WatchListController::class, 'destroy']);

    Route::get('/profile/readlist', [ReadListController::class, 'index']);
    Route::post('/profile/readlist/{manga}', [ReadListController::class, 'store']);
    Route::delete('/profile/readlist/{manga}', [ReadListController::class, 'destroy']);

    Route::post('/profile/comments/add', [CommentController::class, 'store']);
    Route::delete('/profile/comments/delete/{comment}', [CommentController::class, 'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']);
});
