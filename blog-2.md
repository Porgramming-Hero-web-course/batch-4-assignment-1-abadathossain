Callbacks:
----------
A function passed as an argument to handle asynchronous tasks. After all some drawbacks Callback hell, difficult to manage errors in deeply nested callbacks.

Promises:
---------
Promises represents a value that may be available now or in the future. Supports chaining with .then() and .catch(). It is easier chaining and better error handling than callbacks. In this sction shown one resolved and another one rejected. When condition rejected that is represents .catch and resolved part represent in .then.

Async/Await:
------------

Syntactic sugar over promises for cleaner, synchronous-like asynchronous code. Simplifies code, makes it readable like synchronous code, and allows try/catch for error handling.

=> Async/Await is the best for modern TypeScript due to its simplicity and readability.
=> Promises are better than callbacks but less readable than async/await.
=> Callbacks should be avoided for cleaner, more maintainable code.