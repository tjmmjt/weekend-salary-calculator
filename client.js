console.log('Weekend Project!');

function employeeAppend(event) {
    // prevent refresh
    event.preventDefault()

    // get the tBody
    let tBody = document.querySelector('tbody')

    // create element tr & tds
    let employeeToAppend = document.createElement('tr')
    let firstNameToAppend = document.createElement('td')
    let lastNameToAppend = document.createElement('td')
    let idInputToAppend = document.createElement('td')
    let titleInputToAppend = document.createElement('td')
    let annualSalaryInputToAppend = document.createElement('td')
    // console.log(firstNameToAppend, lastNameToAppend,idInputToAppend, titleInputToAppend, annualSalaryInputToAppend);

    // declare variables and set equal to input.values
    let firstNameValue = document.getElementById("firstNameInput").value
    let lastNameValue = document.getElementById('lastNameInput').value
    let idInput = document.getElementById('idInput').value
    let titleInput = document.getElementById('titleInput').value
    let annualSalaryInput = document.getElementById('annualSalaryInput').value
    // console.log(firstNameValue, lastNameValue, idInput, titleInput, annualSalaryInput);

    // set innerText to the value
    firstNameToAppend.innerText = firstNameValue
    lastNameToAppend.innerText = lastNameValue
    idInputToAppend.innerText = idInput
    titleInputToAppend.innerText = titleInput
    annualSalaryInputToAppend.innerHTML = annualSalaryInput
    // console.log(firstNameToAppend, lastNameToAppend,idInputToAppend, titleInputToAppend, annualSalaryInputToAppend);
    
    // append td's to tr (employeeToAppend)
    employeeToAppend.append(firstNameToAppend)
    employeeToAppend.append(lastNameToAppend)
    employeeToAppend.append(idInputToAppend)
    employeeToAppend.append(titleInputToAppend)
    employeeToAppend.append(annualSalaryInputToAppend)

    // append tr to tbody
    tBody.append(employeeToAppend)
}