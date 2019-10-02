<?php

namespace App\Http\Requests\Proficiency;

use Illuminate\Foundation\Http\FormRequest;

class NewRequest extends FormRequest
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
			'proficiency_type_id' => 'required',
			'title' => 'required',
			'value' => 'required'
        ];
    }
}
