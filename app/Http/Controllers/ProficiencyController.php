<?php

namespace App\Http\Controllers;

use App\Proficiency;
use Illuminate\Http\Request;
use App\Http\Resources\ProficiencyResource;
use App\Http\Requests\Proficiency\NewRequest;
use App\Http\Requests\Proficiency\UpdateRequest;
use App\Http\Requests\Proficiency\DelRequest;

class ProficiencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$proficiencies = Proficiency::orderBy('created_at', 'DESC')->paginate();
		
		return ProficiencyResource::collection($proficiencies);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewRequest $request)
    {
		$proficiency = new Proficiency();
		
		$proficiency->proficiency_type_id = $request->input('proficiency_type_id');
		$proficiency->title = $request->input('title');
		$proficiency->value = $request->input('value');

		if($proficiency->save()) {
			return response()->json([
				'success' => 1,
				'message' => 'proficiency added successfully'
			]);
		}
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Proficiency  $proficiency
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		$proficiency = Proficiency::findOrFail($id);
		
		return new ProficiencyResource($proficiency);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Proficiency  $proficiency
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $proficiency = Proficiency::findOrFail($request->input('id'));
		
		$proficiency->proficiency_type_id = $request->input('proficiency_type_id');
		$proficiency->title = $request->input('title');
		$proficiency->value = $request->input('value');

		if($proficiency->save()) {
			return response()->json([
				'success' => 1,
				'message' => 'proficiency updated successfully'
			]);
		}
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Proficiency  $proficiency
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
		$proficiency = Proficiency::findOrFail($request->input('id'));
		
		if($proficiency->delete()) {
			return response()->json([
                'success' => 1,
                'message' => 'proficiency deleted successfully'
            ]);
		}
    }
}
