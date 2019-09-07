<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\BrewMethod;

class BrewMethodsController extends Controller
{
    //
    public function getBrewMethods()
    {
        $brewMethods = BrewMethod::withCount('cafes')->get();
        return response()->json($brewMethods);
    }
}
