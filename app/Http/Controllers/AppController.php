<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
class AppController extends Controller
{
    public function getApp() {
        return view('app');
    }
}