<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/signup',[AuthController::class,'signup']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout']);
Route::post('/product/create',[ProductController::class,'store']);
Route::post('/product/update',[ProductController::class,'update']);
Route::post('/product/delete',[ProductController::class,'destroy']);
Route::get('products',[ProductController::class,'index']);
Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::controller(AuthController::class)->group(function () {
    // Route::post('login', 'login');
    // Route::post('signup', 'signup');
    // Route::post('logout', 'logout');
    // Route::post('refresh', 'refresh');

// });