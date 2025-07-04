// objects are mutable data structures that can hold key-value pairs
emptyObject = {};
console.log(emptyObject);

notEmptyObject = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};
console.log(notEmptyObject);

// accessing object properties
console.log(notEmptyObject.street);

// built-in object methods
console.log(Object.keys(notEmptyObject)); // returns an array of keys
console.log(Object.values(notEmptyObject)); // returns an array of values
console.log(Object.entries(notEmptyObject)); // returns an array of key-value pairs
console.log(Object.hasOwn(notEmptyObject, "city")); // checks if the object has a property
console.log(Object.hasOwn(notEmptyObject, "country")); // checks for a non-existent property
