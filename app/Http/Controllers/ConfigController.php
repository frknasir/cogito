<?php

namespace App\Http\Controllers;

use App\Config;
use App\Http\Requests\Config\UpdateRequest;
use App\Http\Resources\ConfigResource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ConfigController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $config = Config::findOrFail(1);

        return new ConfigResource($config);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Config  $config
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $config = Config::findOrFail($request->input('id'));
        $config->site_name = $request->input('site_name');
        $config->site_title = $request->input('site_title');
        $config->site_description = $request->input('site_description');
        
        if($request->hasFile('logo')) {
            //Get filename with the extension
            $filenameWithExt = $request->file('logo')->getClientOriginalName();
            //get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            //get just ext
            $extension = $request->file('logo')->getClientOriginalExtension();
            //filename to store
            $uuid = Str::uuid();
            $filenameToStore = $uuid.'.'.$extension;
            // upload image
            $path = $request->file('logo')->storeAs('public/config', $filenameToStore);
        
            //delete the previous file
            if($config->site_logo_url != null) {
                //Storage::delete('public/'.$post->thumbnail);
                unlink(public_path("storage/".$config->site_logo_url));
            }
            
            $config->site_logo_url = "config/".$filenameToStore;
        }

        $config->office_address = $request->input('office_address');
        $config->email = $request->input('email');
        $config->phone_number = $request->input('phone_number');
        $config->twitter_url = $request->input('twitter_url');
        $config->facebook_url = $request->input('facebook_url');
        $config->instagram_url = $request->input('instagram_url');
        $config->linkedin_url = $request->input('linkedin_url');

        if($config->save()) {
            $success = 1;
        } else {
            $success = 0;
        }

        return response()->json([
            'success' => $success
        ]); 
    }
}
