import {Intern} from '../models/intern.js';

test('create an intern ', () => {
    const intern = new Intern(1,"Jared", "jared@email.com", "UCF");

    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})