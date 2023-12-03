console.log("Weekend Project!");
// create variable to store totalSalaryExpense
let totalSalaryExpense = 0;
console.log("total expense", totalSalaryExpense);

// ! employeeAppend()
// TODO function to append employee inputs to DOM
function employeeAppend(event) {
  // prevent refresh
  event.preventDefault();

  // get the tBody
  let tBody = document.querySelector("tbody");

  // create element tr & tds
  let employeeToAppend = document.createElement("tr");
  let firstNameToAppend = document.createElement("td");
  let lastNameToAppend = document.createElement("td");
  let idInputToAppend = document.createElement("td");
  let titleInputToAppend = document.createElement("td");
  let annualSalaryInputToAppend = document.createElement("td");
  let deleteButtonCell = document.createElement("td");
  // console.log(firstNameToAppend, lastNameToAppend,idInputToAppend, titleInputToAppend, annualSalaryInputToAppend);

  // declare variables and set equal to input.values
  let firstNameValue = document.getElementById("firstNameInput").value;
  let lastNameValue = document.getElementById("lastNameInput").value;
  let idInput = document.getElementById("idInput").value;
  let titleInput = document.getElementById("titleInput").value;
  let annualSalaryInput = document.getElementById("annualSalaryInput").value;
  // console.log(firstNameValue, lastNameValue, idInput, titleInput, annualSalaryInput);

  // set innerText to the value
  firstNameToAppend.innerText = firstNameValue;
  lastNameToAppend.innerText = lastNameValue;
  idInputToAppend.innerText = idInput;
  titleInputToAppend.innerText = titleInput;
  annualSalaryInputToAppend.innerText = annualSalaryInput;
  // console.log(firstNameToAppend, lastNameToAppend,idInputToAppend, titleInputToAppend, annualSalaryInputToAppend);

  // append td's to tr (employeeToAppend)
  employeeToAppend.append(firstNameToAppend);
  employeeToAppend.append(lastNameToAppend);
  employeeToAppend.append(idInputToAppend);
  employeeToAppend.append(titleInputToAppend);
  employeeToAppend.append(annualSalaryInputToAppend);
  employeeToAppend.append(deleteButtonCell);

  // append tr to tbody
  tBody.append(employeeToAppend);


  // TODO add salaries
  totalSalaryExpense += Number(annualSalaryInput);
  // console.log('salary input', Number(annualSalaryInput));
  // console.log(totalSalaryExpense);
  let monthlySalaryExpense = parseInt(totalSalaryExpense / 12)
  let assignTotal = document.getElementById("totalMonthly")
  assignTotal.innerText = monthlySalaryExpense;

  // TODO Conditional for Over Budget
  if(monthlySalaryExpense > 20000) {
    let overBudget = document.getElementById('overBudget')
    overBudget.innerText = "| OVER BUDGET!"
  }

  // TODO Delete Button
  // Make delete button
  let deleteButton = document.createElement("button");
  // add 'Delete' text to button
  deleteButton.innerText = "Delete";
  // append the button to the td
  deleteButtonCell.append(deleteButton);
  // set onclick attribute and deleteRow function
  deleteButton.setAttribute("onclick", "deleteRow(event)");

  // TODO Reset Fields
  document.getElementById("firstNameInput").value = "";
  document.getElementById("lastNameInput").value = "";
  document.getElementById("idInput").value = "";
  document.getElementById("titleInput").value = "";
  document.getElementById("annualSalaryInput").value = "";
}

// ! deleteRow()
// TODO Function to delete row
//Delete Row Of Employee Data
function deleteRow(event) {
  // Console log to find path to correct node of entire row data
  //   console.log("test", event.target.parentNode.parentNode);
  event.target.parentNode.parentNode.remove();
  event.preventDefault();
}

