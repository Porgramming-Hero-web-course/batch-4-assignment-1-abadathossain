Why Are Type Guards Necessary in TypeScript?
--------------------------------------------
Type Guards are necessary because they help TypeScript narrow down types at runtime, ensuring type safety and preventing runtime errors. So all developers initially used this method.They allow TypeScript to correctly infer the type of a variable, enabling safe access to properties and methods.

=> typeof Type Guard:

Narrow types for primitive values like string, number, etc.
Example:

function isString(value: string | number): boolean {
  return typeof value === "string";
}


=> instanceof Type Guard:

Narrow types for class instances.

class Car { drive() {} }
function operate(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive(); // TypeScript knows `vehicle` is a `Car`
  }
}


=> in Type Guard:

Narrow types by checking if a property exists in an object.

interface Circle { radius: number; }
function area(shape: Circle | Rectangle) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  }
}

=> Custom Type Guards:

Narrow custom types with specific logic.

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}


=> Nullable Type Guards:

Ensure a value is not null or undefined.

function processValue(value: string | null) {
  if (value !== null) {
    console.log(value.toUpperCase());
  }
}

Significance of Type Guards:
----------------------------
=> Type Safety: Ensures correct access to properties and methods.
=> Error Prevention: Avoids errors from accessing properties on the wrong type.
=> Clearer Code: Makes type narrowing explicit and improves readability.
=> Type Guards are essential for writing robust, safe, and maintainable TypeScript code.