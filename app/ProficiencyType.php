<?php

namespace App;

use App\Proficiency;
use Illuminate\Database\Eloquent\Model;

class ProficiencyType extends Model
{
    public function proficiencies() {
		return $this->hasMany(Proficiency::class);
	}
}
