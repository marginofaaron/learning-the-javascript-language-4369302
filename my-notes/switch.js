//Switch statement alternative to if-else

// a switch function can be an alternative for an if-else

// set up window prompt
let answer = window.prompt("Type YES, NO, or MAYBE. Then click OK");

// set up switch statement
switch (answer) {
  case "YES":
    console.log("You said YES");
    break;
  case "NO":
    console.log("You said NO");
    break;
  case "MAYBE":
    console.log("You said MAYBE");
    break;
  default:
    console.log("You rebel :)");
    break;
}