{
  // 

  function getProperty<T>(obj: T, key: keyof T): T[keyof T] {
    console.log(key)
    return obj[key];
  }

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

  // 
}