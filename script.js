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
    let deleteButtonCell = document.createElement('td')
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
    annualSalaryInputToAppend.innerText = annualSalaryInput
    // console.log(firstNameToAppend, lastNameToAppend,idInputToAppend, titleInputToAppend, annualSalaryInputToAppend);
    
    // delete button
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButtonCell.append(deleteButton)
    deleteButton.setAttribute('onclick', 'deleteInfo(event)')
    

    
    // append td's to tr (employeeToAppend)
    employeeToAppend.append(firstNameToAppend)
    employeeToAppend.append(lastNameToAppend)
    employeeToAppend.append(idInputToAppend)
    employeeToAppend.append(titleInputToAppend)
    employeeToAppend.append(annualSalaryInputToAppend)
    employeeToAppend.append(deleteButtonCell)



    // append tr to tbody
    tBody.append(employeeToAppend)


    event.preventDefault()
}

 //Delete Row Of Employee Data
 function deleteInfo(event) {
    // Console log to find path to correct node of entire row data
    console.log('test', event.target.parentNode.parentNode)
    
    event.target.parentNode.parentNode.remove();
  
    event.preventDefault()
  }
