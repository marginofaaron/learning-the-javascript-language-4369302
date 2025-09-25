// JavaScript Array Methods and Properties Example
// This file demonstrates the use of built-in array methods and properties
// using an array of the first five US states.

// 1. Create an array with the first five US states
const firstFiveStates = ["Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut"];

// 2. Built-in property: length
// Returns the number of elements in the array
console.log("Number of states:", firstFiveStates.length); // Output: 5

// 3. Adding elements to the end: push()
// Adds "Massachusetts" to the end of the array
firstFiveStates.push("Massachusetts");
console.log("After push:", firstFiveStates);
// Output: ["Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut", "Massachusetts"]

// 4. Removing the last element: pop()
// Removes and returns the last element
const lastState = firstFiveStates.pop();
console.log("Popped state:", lastState); // Output: "Massachusetts"
console.log("After pop:", firstFiveStates);
// Output: ["Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut"]

// 5. Adding elements to the beginning: unshift()
// Adds "Rhode Island" to the start of the array
firstFiveStates.unshift("Rhode Island");
console.log("After unshift:", firstFiveStates);
// Output: ["Rhode Island", "Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut"]

// 6. Removing the first element: shift()
// Removes and returns the first element
const firstState = firstFiveStates.shift();
console.log("Shifted state:", firstState); // Output: "Rhode Island"
console.log("After shift:", firstFiveStates);
// Output: ["Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut"]

// 7. Modifying array content: splice()
// Remove 2 elements starting from index 2, and add "Massachusetts" and "Maryland"
const removedStates = firstFiveStates.splice(2, 2, "Massachusetts", "Maryland");
console.log("Removed states (with splice):", removedStates); // Output: ["New Jersey", "Georgia"]
console.log("After splice:", firstFiveStates);
// Output: ["Delaware", "Pennsylvania", "Massachusetts", "Maryland", "Connecticut"]

// 8. Adding a custom method to all arrays using prototype
// This method returns the first element of any array
if (!Array.prototype.first) {
  Array.prototype.first = function () {
    // 'this' refers to the array instance on which the method is called
    return this[0];
  };
}
console.log("First state (using prototype):", firstFiveStates.first()); // Output: "Delaware"

// 9. Commonly used array methods (examples, not exhaustive):
// - forEach: Run a function for each element
firstFiveStates.forEach(function (state, index) {
  console.log(`State #${index + 1}:`, state);
});

// - map: Create a new array with transformed values
const stateAbbreviations = firstFiveStates.map(state => state.slice(0, 2).toUpperCase());
console.log("State abbreviations:", stateAbbreviations);

// - filter: Create a new array with states containing 'a'
const statesWithA = firstFiveStates.filter(state => state.includes('a'));
console.log("States with 'a':", statesWithA);

// - reduce: Combine all state names into a single string
const allStates = firstFiveStates.reduce((acc, curr) => acc + ", " + curr);
console.log("All states (as one string):", allStates);

// - includes: Check if a state is in the array
console.log("Array includes 'Georgia':", firstFiveStates.includes("Georgia")); // Output: false (it was removed by splice)