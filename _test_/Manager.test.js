const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("add officeNumber using constructor function", () =>
{
    const testValue = "100";
    const employee = new Manager("Alaya", 1, "alayaguxj@gmail.com", testValue);
    expect(employee.officeNumber).toBe(testValue);

});

test('getRole() should return "Manager"', () =>
{
    const testValue = "Manager";
    const employee = new Manager("Alaya", 1, "alayaguxj@gmail.com","officeNumber");
    expect(employee.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => 
{
    const testValue = 100;
    const employee = new Manager("Alaya",1,"alayaguxj@gmail.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});