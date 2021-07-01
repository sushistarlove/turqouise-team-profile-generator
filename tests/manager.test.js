const Manager = require("../lib/manager");
const Employee = require("../lib/employee")

test("Can set office number through constructor", () => {
    const test = 365;
    const emp = new Manager(test)
    expect(emp.officeNumber).toBe(test);

});

test("Can get office number through getofficeNumber()", () => {
    const test = 365;
    const emp = new Manager( test)
    expect(emp.getofficeNumber()).toBe(test);
});

test("getRole() should return 'manager'", () => {
    const testValue ="manager";
    const emp = new Manager()
    expect(emp.getRole()).toBe(testValue);
});