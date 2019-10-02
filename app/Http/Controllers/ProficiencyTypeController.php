<?php

namespace App\Http\Controllers;

use App\ProficiencyType;
use Illuminate\Http\Request;
use App\Http\Resources\ProficiencyTypeResource;

class ProficiencyTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$proficiencyTypes = ProficiencyType::all();
		
		return ProficiencyTypeResource::collection($proficiencyTypes);
    }
}
