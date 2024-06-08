import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "First_Number" },
  { message: "Enter second number", type: "number", name: "Second_Number" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Add", "Multiply", "Sub", "Divide", "Square", "Square Root"],
  },
]);

//Condtional Statements

if (answer.operator === "Add") {
  console.log(answer.First_Number + answer.Second_Number);
} else if (answer.operator === "Multiply") {
  console.log(answer.First_Number * answer.Second_Number);
} else if (answer.operator === "Sub") {
  console.log(answer.First_Number - answer.Second_Number);
} else if (answer.operator === "Divide") {
  console.log(answer.First_Number / answer.Second_Number);
} else if (answer.operator === "Square") {
  console.log(answer.First_Number ** 2);
  console.log(answer.Second_Number ** 2);
} else if (answer.operator === "Square Root") {
  console.log(answer.First_Number ** 0.5);
  console.log(answer.Second_Number ** 0.5);
} else {
  console.log("Please select valid operation");
}
