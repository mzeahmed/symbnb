<?php

declare(strict_types=1);

namespace App\Shared\Http\Response;

use Symfony\Component\HttpFoundation\JsonResponse;

class ApiResponseFactory implements ApiResponseInterface
{
    public function success(array $data = [], string $message = null, int $status = 200): JsonResponse
    {
        return $this->create(
            new ApiResponse(true, $message ?? 'Success', $data),
            $status
        );
    }

    public function error(?string $message = null, array $errors = [], int $status = 400): JsonResponse
    {
        return $this->create(
            new ApiResponse(false, $message ?? 'An error has occurred', [], $errors),
            $status
        );
    }

    public function paginated(array $data, array $meta, ?string $message = null): JsonResponse
    {
        return $this->create(
            new ApiResponse(true, $message, $data, [], $meta)
        );
    }

    private function create(ApiResponse $response, int $status = 200): JsonResponse
    {
        return new JsonResponse($response->toArray(), $status);
    }
}
