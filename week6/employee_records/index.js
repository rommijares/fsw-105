let employees = ['John', 'Albert', 'Tina', 'Mary']

function employee(name, job_title, salary, status='full time') {
    this.name = name
    this.job_title = job_title
    this.salary = salary
    this.status = status
}

employee.prototype.printEmployeeForm = function() {
    console.log('Name: ' + this.name)
    console.log('Job Title: ' + this.job_title)
    console.log('Salary: ' + this.salary)
    console.log('Status: ' + this.status)
}

let employee1 = new employee ('Frank','Doctor','$80k/year' )
employee1.printEmployeeForm()
employees.push(employee1.name)
console.log('--------------')

let employee2 =  new employee ('Jill','Cashier','$25k/year', 'part time')
employee2.printEmployeeForm()
employees.push(employee2.name)
console.log('--------------')

let employee3 =  new employee ('Ted','Constructor','$65k/year', 'contract')
employee3.printEmployeeForm()
employees.push(employee3.name)
console.log('--------------')

console.log(employees)
