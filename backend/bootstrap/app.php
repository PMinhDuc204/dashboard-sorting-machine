<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        using:function() {
            Route::prefix('api/v1')
            ->group(__DIR__.'/../routes/api.php');
        }
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            // 'jwt.verify' =>  \App\Http\Middleware\JwtVerify::class,
            'jwt.protect' => \App\Http\Middleware\JwtProtectMiddleware::class,
            'auth.jwt'    => \PHPOpenSourceSaver\JWTAuth\Http\Middleware\Authenticate::class,
            'jwt.refresh' => \PHPOpenSourceSaver\JWTAuth\Http\Middleware\RefreshToken::class,
            'user.auth'   => \App\Http\Middleware\UserAuthenticate::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->renderable(function (ValidationException $e, Request $request) {
        if ($request->is('api/*')) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors(),
            ], 422);
        }
    });

    $exceptions->renderable(function (\PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException $e, Request $request) {
        if ($request->is('api/*')) {
            $message = 'Could not authenticate with token';
            if ($e instanceof \PHPOpenSourceSaver\JWTAuth\Exceptions\TokenInvalidException) {
                $message = 'Token is invalid';
            } elseif ($e instanceof \PHPOpenSourceSaver\JWTAuth\Exceptions\TokenExpiredException) {
                $message = 'Token has expired';
            }

            return response()->json([
                'message' => $message,
                'status_code' => 401
            ], 401);
        }
    });

    })->create();