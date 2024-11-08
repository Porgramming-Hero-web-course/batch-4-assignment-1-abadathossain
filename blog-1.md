Union Types (|) in TypeScript
-----------------------------
Union means either this value or this value. That means at any one fullfill this condition. Union types are used when a value can be more than a single type. A union type allows a variable or parameter to be one of several types. 

For example: type Status = "success" | "failure";

Significance of Union Types:
----------------------------
=> Gives freedom of several kinds.
=> Provides type safety by restricting values to predefined types.
=> Perfect for managing a function's several possible input types.

Intersection Types (&) in TypeScript
------------------------------------
Intersection types are a way in TypeScript to combine multiple types into one.That means one condition but fullfill both or all conditions. The resulting type must meet all the constraints of the combined types, which is useful for combining behaviors or properties.

For example:
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type PersonEmployee = Person & Employee;

Significance of Intersection Types (&):
----------------------------------------
=> Creates a single type or condition by combining several types.
=> Ensures that a variable has characteristics from every type that intersects, which is advantageous for complex structures.
=> Improves type safety by making sure an item complies with several restrictions.