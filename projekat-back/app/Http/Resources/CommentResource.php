<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'comment';
    public function toArray($request)
    {
        return [
            "id" => $this->resource->id,
            "body" => $this->resource->body,
            "username" => $this->resource->username,
            "anime_id" => $this->resource->anime_id,
            "parent_id" => $this->resource->parent_id,
            "user_id" => $this->resource->user_id,
            'created_at' => $this->resource->created_at,
        ];
    }
}
