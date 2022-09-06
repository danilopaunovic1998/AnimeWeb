<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReadListCollection;
use App\Models\ReadList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ReadListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $wl = ReadList::all()->where('user_id', '=', $user->id);
        return new ReadListCollection($wl);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($manga_id)
    {
        $rle = new ReadList;


        $rle->user_id = Auth::user()->id;
        $rle->manga_id = $manga_id;
        $validation = is_null(DB::table("read_lists")->where('user_id', '=', Auth::user()->id)->where('manga_id', '=', $manga_id)->first());
        if ($validation) {

            $rle->save();
            return response()->json(["success" => true, "message" => "Manga is added to your read list"]);
        }
        return response()->json(["success" => false, "data" => $validation, "message" => "This manga is already added to your read list"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReadList  $readList
     * @return \Illuminate\Http\Response
     */
    public function show(ReadList $readList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ReadList  $readList
     * @return \Illuminate\Http\Response
     */
    public function edit(ReadList $readList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ReadList  $readList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReadList $readList)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReadList  $readList
     * @return \Illuminate\Http\Response
     */
    public function destroy($manga)
    {
        $deleted = DB::table("read_lists")->where('user_id', '=', Auth::user()->id)->where('manga_id', '=', $manga)->delete();
        return response()->json(["message" => "Manga was removed from youre watch list"]);
    }
}
