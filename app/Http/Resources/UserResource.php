<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

class UserResource extends JsonResource
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
        $user = User::find($this->id);
        $roles = $user->roles()->select('name')->get();
        $role_id = $user->roles()->select('roles.id')->first();
        $user_roles = array();
        for($i = 0; $i < count($roles); $i++) {
            $role = $roles[$i];
            array_push($user_roles, $role["name"]);
        }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'role_id' => $role_id['id'],
            'roles' => $user_roles,
            'created_at' => ($this->created_at == NULL) ? $this->created_at : date('d M Y - H:i:s', $this->created_at->timestamp),
            'updated_at' => ($this->updated_at == NULL) ? $this->updated_at : date('d M Y - H:i:s', $this->updated_at->timestamp)
        ];
    }
}