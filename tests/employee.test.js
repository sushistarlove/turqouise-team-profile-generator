const Employee = require("../lib/employee");

test("Can add new employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Can set name through constructor", () => {
    const name = "John";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Can set id through constructor", () => {
    const id = 255;
    const emp = new Employee("John", id);
    expect(emp.id).toBe(id);
});

test("Can set email through constructor", () => {
    const email = "test@test.com";
    const emp = new Employee("John", 255, email);
    expect(emp.email).toBe(email);
});

test("Can get name through getName()", () => {
    const name = "John";
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
});

test("Can get id through getId()", () => {
    const id = "255";
    const emp = new Employee("John", id);
    expect(emp.getId()).toBe(id);
});

test("Can get email through getEmail()", () => {
    const email = "test@test.com";
    const emp = new Employee("John", 255, email);
    expect(emp.getEmail()).toBe(email);
});

test("getRole() should return 'employee'", () => {
    const testValue = "employee";
    const emp = new Employee("John", 255, "test@test.com");
    expect(emp.getRole()).toBe(testValue);
});

