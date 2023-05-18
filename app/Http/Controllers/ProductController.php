<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

//php artisan storage:link = php artisan storage:link = http://127.0.0.1:8000/storage/1.jpg
 
class ProductController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }



    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // All Product
       $products = Product::all();
      
       // Return Json Response
       return response()->json([
          'products' => $products
       ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage. 'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
     */
    public function store(Request $request)
    {
        // try {
              
            $request->validate([
                'name' => 'required|string|max:258',
                'image' => 'string|nullable',
                'image' => 'nullable|mimes:png,jpg||max:1999',
                'buy_price' => 'integer',
                'sell_price' => 'integer',
                'stock' => 'integer',
            ]);
            // 'images' => 'string|nullable',
            $imageName = null;
            if($request->image){
                $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            }
      
            // Create Product
            Product::create([
                'name' => $request->name,
                'image' => $imageName,
                'buy_price' => $request->buy_price,
                'sell_price' => $request->sell_price,
                'stock' => $request->stock,
            ]);
            if($imageName){
// Save Image in Storage folder
Storage::disk('public')->put($imageName, file_get_contents($request->image));
      
            }
            
            // Return Json Response
            return response()->json([
                'message' => "Product successfully created."
            ],200);
        // } catch (\Throwable  $e) {
        //     // Return Json Response
        //     return response()->json([
        //         'e' =>$e,
        //         'message' => "Something went really wrong!"
        //     ],500);
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        // Product Detail 
       $product = Product::find($product->id);
       if(!$product){
         return response()->json([
            'message'=>'Product Not Found.'
         ],404);
       }
      
       // Return Json Response
       return response()->json([
          'product' => $product
       ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        try {
            // Find product
            // $request->validate([
            //     'id' => 'integer',
            //     'name' => 'required|string|max:258',
            //     'image' => 'string|nullable',
            //     'image' => 'nullable|mimes:png,jpg||max:1999',
            //     'buy_price' => 'integer',
            //     'sell_price' => 'integer',
            //     'stock' => 'integer',
            // ]);
            // return response()->json([
            //     'message' => $request->id,
            // ],200);
            $product = Product::find($request->id);
            
            if(!$product){
              return response()->json([
                'message'=>'Product Not Found.'
              ],404);
            }
            
            //echo "request : $request->image";
            $imageName = null;
           
            if($request->image != $product->image) {
                Storage::disk('public')->delete($product->image);
               
                $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
                Storage::disk('public')->put($imageName, file_get_contents($request->image));
               
            //     if ($product->image != null) {
            //         Storage::disk('public')->delete($product->image);
            //     }
      
            //     // Image name
            //     if($request->image){
            //         $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            //     }
            //     $product->image = $imageName;
            
            //     // Image save in public folder
            //     // ->put($imageName, file_get_contents($request->image));
            //     Storage::disk('public')->put($imageName, file_get_contents($request->image));
            }
           
            if($request->image == $product->image){
                $imageName = $product->image;
            }
            
            $product->name = $request->name;
            $product->buy_price = $request->buy_price;
            
            $product->sell_price = $request->sell_price;
            
            $product->stock = $request->stock;
            
            $product->image =  $imageName;
            
            // Update Product
            $product->save();
      
            // Return Json Response
            return response()->json([
                'message' => "Product successfully updated."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!",
                'id' => $e,
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        try {
            $token = $request->token;
            if ( $token = JWTAuth::parseToken()) {
                $product = Product::find($request->id);
        if(!$product){
          return response()->json([
             'message'=>'Product Not Found.'
          ],404);
        }
        if ($product->image != null) {
            Storage::disk('public')->delete($product->image);
        }
        
       
        $product->delete();
      
        // Return Json Response
        return response()->json([
            'message' => "Product successfully deleted."
        ],200);
            }
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'tidak ada token',
            ], 401);
        }
        // Detail 
        
      
        
    }
    public function me()
    {
        return response()->json(auth()->user());
    }

}
