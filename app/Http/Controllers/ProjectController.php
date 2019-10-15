<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;
use App\Http\Requests\Project\NewRequest;
use App\Http\Requests\Project\UpdateRequest;
use App\Http\Requests\Project\DeleteRequest;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$projects = Project::orderBy('created_at', 'DESC')->paginate();
		
		return ProjectResource::collection($projects);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewRequest $request)
    {
		$project = new Project();
		
		$project->title = $request->input('title');
		$project->description = $request->input('description');
		$project->source_code = $request->input('source_code');
		$project->live_url = $request->input('live_url');

		if($project->save()) {
			return response()->json([
				'success' => 1,
				'message' => 'project added successfully'
			]);
		}
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		$project = Project::findOrFail($id);
		
		return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $project = Project::findOrFail($request->input('id'));
		
		$project->title = $request->input('title');
		$project->description = $request->input('description');
		$project->source_code = $request->input('source_code');
		$project->live_url = $request->input('live_url');

		if($project->save()) {
			return response()->json([
				'success' => 1,
				'message' => 'project added successfully'
			]);
		}
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteRequest $request)
    {
		$project = Project::findOrFail($request->input('id'));
		
		if($project->delete()) {
			return response()->json([
                'success' => 1,
                'message' => 'project deleted successfully'
            ]);
		}
    }
}
