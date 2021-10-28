import {Employee} from '../models/employee.js';
import emailValidator from 'email-validator';

test('create an employee ', () => {
    const employee = new Employee(1,"Jared", "jared@gamil.com");

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('check employee email ', () => {
    const employee = new Employee(1,"Jared", "jared@gamil.com");

    expect(emailValidator.validate(employee.getEmail())).toBeTruthy();
})


