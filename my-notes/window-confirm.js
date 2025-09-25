//simple if else with window confirm

let answer = window.confirm("ok = true; cancel = false");

if (answer === true) {
  console.log('it is true!');
} else {
  console.log('it is false!');
}