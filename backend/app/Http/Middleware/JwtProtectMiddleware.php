<?php

namespace App\Http\Middleware;

use App\Enums\StatusCode;
use Closure;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException;
use PHPOpenSourceSaver\JWTAuth\Exceptions\TokenExpiredException;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class JwtProtectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            if (!$user) {
                return response()->json(['message' => 'Unauthorized'], StatusCode::UNAUTHORIZED);
            }
        } catch (TokenExpiredException $e) {
            return response()->json(['message' => 'Unauthorized'], StatusCode::UNAUTHORIZED);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Authorization token not found'], 401);
        }

        return $next($request);
    }
}