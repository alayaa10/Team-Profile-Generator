const Engineer = require("../lib/Engineer");

test("addition of github username using constructor", () =>
{
    const testValue = "GitHubUser";
    const employee = new Engineer("Alaya",1,"@alayaguxj@gmail.com", testValue)
    expect(employee.github).toeBe(testValue);
});

test("getRole() returns Engineer for Role", () =>
{
    const testValue = "Engineer";
    const employee = new Engineer("Alaya",1,"alayaguxj@gmail.com","GitHubUser")
    expect(employee.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("Alaya",1,"alayaguxj@gmail.com");
    expect(employee.getGithub()).toBe(testValue);
});
