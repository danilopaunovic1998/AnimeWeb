<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'title_eng' => $this->resource->title_eng,
            'title_jpn' => $this->resource->title_jpn,
            'img' => $this->resource->img,
            'episodes' => $this->resource->episodes,
            'status' => $this->resource->status,
            'synopsis' => $this->resource->synopsis,
        ];
    }
}
