<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Newsletter;

class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Newsletter::getMembers();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $email = $request->input('email');

        if(Newsletter::subscribeOrUpdate($email)){
            $success = 1;
            $message = "You have been subscribed successfully";
        }else{
            $success = 0;
            $message = "Subscription failed. Please try again";
        }
        
        
        return response()->json([
            'success'=>$success,
            'message'=> $message
        ]);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $email = $request->input('email');
        
        if(Newsletter::delete($email)){
            $success = 1;
            $message = "You have been unsubscribed successfully";
        }else{
            $success = 0;
            $message = "Failed to Unsubscribe. Please try again";
        }

        return response()->json([
            'success'=>$success,
            'message'=> $message
        ]);
    
    }
}
