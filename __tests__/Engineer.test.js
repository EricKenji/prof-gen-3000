const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


test("Can get Github ID via getGithub()", () => {
    const testValue = "octocat";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });