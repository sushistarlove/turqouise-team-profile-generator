const Intern = require("../lib/intern");

test("Can set school through constructor", () => {
    const school = "UPenn";
    const emp = new Intern("John", 255, "test@test.com", school)
    expect(emp.school).toBe(school);

});

test("Can get school through getSchool()", () => {
    const school = "UPenn";
    const emp = new Intern("John", 255, "test@test.com", school)
    expect(emp.getSchool()).toBe(school);
});

test("getRole() should return 'intern'", () => {
    const testValue = "intern";
    const emp = new Intern("John", 255, "test@test.com", "UPenn")
    expect(emp.getRole()).toBe(testValue);
});