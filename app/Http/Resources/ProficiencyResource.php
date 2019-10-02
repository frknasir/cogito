<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProficiencyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
		//return parent::toArray($request);
		
		return [
			'id' => $this->id,
			'proficiency_type_id' => $this->proficiency_type_id,
			'proficiency_type' => $this->proficiencyType,
			'title' => $this->title,
			'value' => $this->value,
			'created_at' => ($this->created_at == NULL) ? $this->created_at : date('d M Y - H:i:s', $this->created_at->timestamp),
            'updated_at' => ($this->updated_at == NULL) ? $this->updated_at : date('d M Y - H:i:s', $this->updated_at->timestamp)
		];
    }
}
