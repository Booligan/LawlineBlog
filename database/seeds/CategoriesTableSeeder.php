<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Category::create(['name' => 'CLE']);
        App\Category::create(['name' => 'Lawline News']);
        App\Category::create(['name' => 'Hot Topics']);
        App\Category::create(['name' => 'Legal Marketing']);        
    }
}
