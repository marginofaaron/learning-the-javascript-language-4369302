//create new object
const newObject = {
  key1: "value1",
  key2: "value2",
};

//to copy initial first object instead, use these methods
//this must be done before any edits to first object
newObject3 = { ...newObject };

//assign second object to first object
let newObject2 = newObject;

//change something in newObject2
newObject2.key1 = "otherValue";

//see that both update to be same value
console.log(newObject);
console.log(newObject2);

//now see that newObject3 has the values of the original object
console.log(newObject3);
