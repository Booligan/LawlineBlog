<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Category;
use App\Http\Resources\Category as CategoryResource;
use App\Http\Resources\Post as PostResource;


class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
           //Get posts
        $categories = Category::all();

        //Return collection of posts as a resource
        return CategoryResource::collection($categories);
        
    }

     public function posts($id)
    {
           //Get posts
        $category = Category::find($id);
        $posts = $category -> posts;

        //Return collection of posts as a resource
        return PostResource::collection($posts);
        
    }

   
}
