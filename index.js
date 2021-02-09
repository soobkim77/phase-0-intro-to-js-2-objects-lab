// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '1234 Happy St' 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdated = {...employee};
    employeeUpdated[key] = value;
    return employeeUpdated;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeDeleted = {...employee}
    delete employeeDeleted[key]
    return employeeDeleted
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}