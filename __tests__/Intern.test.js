
const Intern = require('../lib/Intern.js');

test('Can get school via getSchool()', () => {
    const testValue = 'school';
    const e = new Intern("Alice", 1, 'test@test.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });