<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Post;
use App\Http\Resources\Post as PostResource;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Get posts
        $posts = Post::orderBy('created_at','desc')->get();

        //Return collection of posts as a resource
        return PostResource::collection($posts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validate post
        $this->validate($request, [
            'title' => 'required',
            'body' => 'required', 
            'category_id' => 'required',            
            'author' => 'required',
            'img_url' => 'required',                                                                                  
        ]);

        // Create Post
        $post = new Post;
        $post->title = $request->input('title');
        $post->body = $request->input('body');
        $post->category_id = $request->input('category_id');
        $post->img_url = $request->input('img_url');        
        $post->author = $request->input('author');     
        
        if($post->save()) {
            return new PostResource($post);    
        }else{
            return "error";
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Get post
        $post = Post::find($id);

        //Return single post as a resource
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
         $this->validate($request, [
            'title' => 'required',
            'body' => 'required', 
            'category' => 'required',            
            'author' => 'required',
        ]);

         // Update Post
        $post = Post::find($id);
         $post->title = $request->input('title');
        $post->body = $request->input('body');
        $post->category = $request->input('category');
        $post->author = $request->input('author');   
       
        if ($post->save()){
            return new PostResource($post);                           
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Get post
        $post = Post::findorFail($id);

        //Delete post
        if($post->delete()){
            return new PostResource($post);            
        }
    }
}
