import {Manager} from '../models/manager.js';

test('create an manager ', () => {
    const manager = new Manager(1,"Jared", "jared@email.com", "7223");

    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
})