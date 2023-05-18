<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'image',
        'buy_price',
        'sell_price',
        'stock',
        'updated',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    // $table->string('name')->unique();
    //         $table->string('image')->nullable();
    //         $table->bigInteger('buy_price')->nullable();
    //         $table->bigInteger('sell_price')->nullable();
    //         $table->bigInteger('stock')->nullable();
    //         $table->timestamp('updated')->nullable();
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];



}
