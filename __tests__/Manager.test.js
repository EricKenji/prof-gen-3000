const Manager = require('../lib/Manager');

test('Can get office number', () => {
    const testValue = 2;
    const e = new Manager("Foo", 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return \"Manager"', () => {
    const testValue = 'Manager';
    const e = new Manager("Foo", 1, 'test@test.com');
    expect(e.getRole()).toBe(testValue);
});