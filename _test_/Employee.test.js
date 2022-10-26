const Employee = require("../lib/Employee");

test("addittion of name using constructor function", () =>
{
    const testValue = "Alaya";
    const employee = new Employee(testValue);
    expect(employee.name).toBe(testValue);

});

test("addition of id using constructor function", () =>
{
    const testValue = "ID";
    const employee = new Employee("Alaya", testValue);
    expect(employee.id).toBe(testValue);

});

test("addition of email usuing constructor function", () =>
{
    const testValue = "Email";
    const employee = new Employee("Alaya", 1, testValue);
    expect(employee.email).toBe(testValue);

});

test("getRole() resturns Employee for Role", () =>
{
    const testValue = "Employee";
    const employee = new Employee("Alaya", 1, "alayaguxj@gmail.com")
    expect(employee.getRole()).toBe(testValue);
    
});