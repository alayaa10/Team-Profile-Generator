const Intern = require("../lib/Intern");

test("addition of school name using constructor function", () =>
{
    const testValue = "Rice University";
    const employee = new Intern("Alaya",1,"alayaguxj@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
});
test("getRole() returns Intern as a role", () =>
{
    const testValue = "Intern";
    const employee = new Intern("Alaya",1,"alayaguxj@gmail.com","schoolName");
    expect(employee.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "Rice University";
    const employee = new Intern("Alaya",1,"alayaguxj@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});