<?php

declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

final class StatusCode extends Enum
{
    public const OK = 200;

    public const CREATED = 201;

    public const NO_CONTENT = 204;

    public const NOT_MODIFIED = 304;

    public const BAD_REQUEST = 400;

    public const UNAUTHORIZED = 401;

    public const FORBIDDEN = 403;

    public const NOT_FOUND = 404;
}
