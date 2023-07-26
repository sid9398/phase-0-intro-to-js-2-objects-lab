const employee = {
    name: "Sidney",
    streetAddress: "12 something lane"
}
function updateEmployeeWithKeyAndValue(employee, key, value ){
    const newObj = {...employee}
    newObj[key] = value
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee   
}
function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = { ...employee };
  delete updatedEmployee[key];
  return updatedEmployee; 
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}