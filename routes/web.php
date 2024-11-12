<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/vempire', function () {
    return view('vempire');
});

Route::get('/dusk', function () {
    return view('dusk');
});

Route::get('/cruelty', function () {
    return view('cruelty');
});