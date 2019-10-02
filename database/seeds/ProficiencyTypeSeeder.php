<?php

use App\ProficiencyType;
use Illuminate\Database\Seeder;

class ProficiencyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProficiencyType::insert([
			['name' => 'Language'],
			['name' => 'Framework'],
			['name' => 'Database'],
			['name' => 'Others']
		]);
    }
}