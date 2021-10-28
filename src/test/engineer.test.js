import {Engineer} from '../models/engineer.js';

test('create an engineer ', () => {
    const engineer = new Engineer(1,"Jared", "jared@email.com", "Jared25");

    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.githubUsername).toEqual(expect.any(String));
})