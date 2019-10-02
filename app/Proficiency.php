<?php

namespace App;

use App\ProficiencyType;
use Illuminate\Database\Eloquent\Model;

class Proficiency extends Model
{
	public function proficiencyType() {
		return $this->belongsTo(ProficiencyType::class);
	}
}
