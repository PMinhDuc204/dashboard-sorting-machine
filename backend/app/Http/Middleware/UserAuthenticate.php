<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\Enums\StatusCode;

class UserAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth::guard('api')->guest()){

            return response()->json([
                'error' => "Unauthorized",
                'error_code' => 'UNAUTHORIZED',
                'status_code' => StatusCode::UNAUTHORIZED,
            ], 401);
        }
        return $next($request);
    }
}