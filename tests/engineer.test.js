const Engineer = require("../lib/engineer");

test("Can set github through constructor", () => {
    const github = "githubusername";
    const emp = new Engineer("John", 255, "test@test.com", github);
    expect(emp.github).toBe(github);

});

test("Can get github through getGitHub()", () => {
    const github = "githubusername";
    const emp = new Engineer("John", 255, "test@test.com", github);
    expect(emp.getGitHub()).toBe(github);
});

test("getRole() should return 'engineer'", () => {
    const testValue = "engineer";
    const emp = new Engineer("John", 255, "test@test.com", "githubusername");   
    expect(emp.getRole()).toBe(testValue);
});

