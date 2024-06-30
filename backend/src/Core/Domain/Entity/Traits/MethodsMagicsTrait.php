<?php

namespace Core\Domain\Entity\Traits;

trait MethodsMagicsTrait
{
    public function __get(string $property): mixed
    {
        if (property_exists($this, $property)) {
            return $this->$property;
        }
        
        $class = get_class($this);
        throw new \Exception("Property {$property} not found in {$class} class.");
    }

    public function __set(string $name, mixed $value): void
    {
        $this->$name = $value;
    }
}