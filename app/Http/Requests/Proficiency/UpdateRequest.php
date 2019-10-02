<?php

namespace App\Http\Requests\Proficiency;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
			'id' => 'required',
            'proficiency_type_id' => 'required',
			'title' => 'required',
			'value' => 'required'
        ];
    }
}
