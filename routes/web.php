<?php

use Illuminate\Support\Facades\Route;

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

//Cualquier ruta   =>  regresa una vista  => Laravel ya no tiene control de las vistas mostradas para el ususario
Route::get('{any}', fn() => view('welcome'))->where('any', '.*');