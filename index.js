// Write your solution in this file!
let employee = {
    streetAddress: '',
    name: ''

}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = { ...employee }
    
    newObject [key] = value
    return newObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign( {}, employee)
    delete newObject [key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let NewEmployee ={
    name: undefined,
    }
    return NewEmployee
    
}
function destructivelyUpdateObject (obj, key, value) {
    obj[key] = value;
    
}
const NewEmployee = destructivelyUpdateObject(employee, 'name', 'undefined' , key);
    
