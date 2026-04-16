<?php

declare(strict_types=1);

namespace App\Shared\Http\Response;

class ApiResponse
{
    public function __construct(
        public bool $success,
        public ?string $message = null,
        public array $data = [],
        public array $errors = [],
        public array $meta = []
    ) {
    }

    public function toArray(): array
    {
        return array_filter([
            'success' => $this->success,
            'message' => $this->message,
            'data' => $this->data ?: null,
            'errors' => $this->errors ?: null,
            'meta' => $this->meta ?: null,
        ], fn ($value) => $value !== null);
    }
}
