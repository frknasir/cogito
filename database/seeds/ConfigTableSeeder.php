<?php

use App\Config;
use Illuminate\Database\Seeder;

class ConfigTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $config = new Config();
        $config->site_name = "Faruk Nasir";
        $config->site_title = "Faruk Nasir";
        $config->site_description = "";
        $config->site_logo_url = "";
        $config->office_address = "";
        $config->email = "frknasir@yahoo.com";
        $config->phone_number = "080 0 000 0000";
        $config->twitter_url = "https://twitter.com/frknasir";
        $config->facebook_url = "https://facebook.com/frknasir";
        $config->instagram_url = "https://instagram.com/frknasir";
        $config->linkedin_url = "https://linkedin.com/in/frknasir";
        $config->save();
    }
}
