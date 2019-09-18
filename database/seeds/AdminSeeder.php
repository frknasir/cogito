<?php

use App\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'Admin';
        $user->email = 'frknasir@yahoo.com';
        $user->password = bcrypt('admin');
        $user->save();

        $user->roles()->attach(1);
    }
}
