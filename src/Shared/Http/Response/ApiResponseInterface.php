<?php

declare(strict_types=1);

namespace App\Shared\Http\Response;

use Symfony\Component\HttpFoundation\JsonResponse;

interface ApiResponseInterface
{
    public function success(array $data = [], string $message = null, int $status = 200): JsonResponse;

    public function error(string $message = null, array $errors = [], int $status = 400): JsonResponse;

    public function paginated(array $data, array $meta, string $message = null): JsonResponse;
}
