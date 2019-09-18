<?php
namespace App\Http\Controllers;
use App\User;
use App\Role;
use Illuminate\Http\Request;
use App\Http\Requests\User\NewRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Http\Requests\User\DelRequest;
use App\Http\Requests\User\ChangePasswordRequest;
use App\Http\Requests\User\AuthRequest;
use App\Http\Resources\UserResource;
use Auth;

class UserController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $users = User::paginate();
        return UserResource::collection($users);
    }

    public function authenticatedUser() {
        $user = User::findOrFail(Auth::user()->id);
        
        return new UserResource($user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewRequest $request) {
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        if($user->save()) {
            $user->roles()->attach($request->input('role_id'));
            return response()->json([
                'success' => 1,
                'message' => 'user added successfully'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        $user = User::findOrFail($id);
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request) {
        $user = User::findOrFail($request->input('id'));
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        if($user->save()) {
            //Detach all roles from the user...
            $user->roles()->detach();
            $user->roles()->attach($request->input('role_id'));
            return response()->json([
                'success' => 1,
                'message' => 'user updated successfully'
            ]);
        }
    }

    public function changeUserPassword(ChangePasswordRequest $request) {
        $user = User::findOrFail($request->input('id'));
        $user->password = bcrypt($request->input('password'));
        if($user->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'user password changed successfully'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request) {
        $user = User::findOrFail($request->input('id'));
        $user->roles()->detach();
        
        if($user->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'user deleted successfully'
            ]);
        }
    }
}