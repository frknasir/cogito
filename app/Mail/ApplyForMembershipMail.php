<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ApplyForMembershipMail extends Mailable
{
    use Queueable, SerializesModels;

    public $applyForMembershipMail;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->applyForMembershipMail = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return  $this->subject("New Membership Application")
                ->to('spoor@ptcij.org')
                ->view('emails.applyForMembership');
    }
}
