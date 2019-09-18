<?php
namespace App\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    public $contactMail;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->contactMail = $request;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return  $this->subject($this->contactMail->subject)
                    ->to('spoor@ptcij.org')
                    ->view('emails.contact');
    }
}
