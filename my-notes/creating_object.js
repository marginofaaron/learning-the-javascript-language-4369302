//create new object
const newObject = {
  key1: "value1",
  key2: "value2",
};

//re-assign key1
newObject.key1 = "value3";

//add new property to object
newObject.key4 = "value4";

//delete property from object
delete newObject.key2;

console.log(newObject);
