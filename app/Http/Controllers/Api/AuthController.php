<?php

namespace App\Http\Controllers\Api;

use PHPOpenSourceSaver\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    //
    // public function login(LoginRequest $request){
    //     $data = $request->validate();
    //     User::create([
    //         'name' => $data['name'],
    //         'email' => $data['name'],
    //         'password' => bcrypt($data['name']), 
    //     ]);
    // }
    public function signup(Request $request){
        // $data = $request->validate();

        // $user = User::create([
        //     'name' => $data['name'],
        //     'email' => $data['email'],
        //     'password' => bcrypt('password'),
        // ]);

        // $validator = Validator::make($request->all(), 
        //               [ 
        //               'name' => 'required',
        //               'email' => 'required|email',
        //               'password' => 'required',  
        //               'c_password' => 'required|same:password', 
        //              ]);  
 
        //  if ($validator->fails()) {  
 
        //        return response()->json(['error'=>$validator->errors()], 401); 
 
        //     }   
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $credentials = $request->only('email', 'password');
        $token = FacadesJWTAuth::attempt($credentials);
        // return   response()->json(['user'=>$user], 200); 

        // $token = Auth::login($user);

        return response(compact('user','token'));
 
        // $user = User::create([
        //     'name' => $data['name'],
        //     'email' => $data['email'],
        //     'password' => bcrypt($data['password']),
        // ]);

        // return response()->json([
        //     'status' => 'success',
        //     'message' => 'User created successfully',
        //     'user' => $user,
        //     'authorisation' => [
        //         'token' => $token,
        //         'type' => 'bearer',
        //     ]
        // ]);




    }
    // public function logout(Request $request){
        
    // }
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login,signup,logout']]);
    // }
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = FacadesJWTAuth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Email atau password salah',
            ], 401);
        }
        $user = Auth::user();
  
        
        
        return response(compact('user','token'));
        // return response()->json([
        //     'success' => true,
        //     'token' => $jwt_token,
        // ]);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $removeToken = FacadesJWTAuth::invalidate(FacadesJWTAuth::getToken());

        if($removeToken) {
            //return response JSON
            return response()->json([
                'success' => true,
                'message' => 'Logout Berhasil!',
                'user' => null,
                'token' => null,  
            ]);
        }
        // Auth::logout();
        // return response()->json([
        //     'status' => 'success',
        //     'message' => 'Successfully logged out',
        // ]);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
    
}
