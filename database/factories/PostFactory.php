<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->text(50),
        'body' => $faker->text(200),
        'author'=> $faker->name,
        'category_id'=> 1,
        'img_url'=> "http://westerlaw.org/wp-content/uploads/2017/10/Law.jpg",                      
    ];
});
