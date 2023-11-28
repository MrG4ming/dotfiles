import db from '$db/mongo';
import stringHash from 'string-hash';

interface User {
    id: string,
    email: string,
    password: string
}


const users = db.collection('users');

export const getUser = (email: string): User {
    let user: User = {
        id: "",
        email: email,
        password: ""
    }

    

    return user;
}

export const addUser = (email: string, password: string): void => {
	console.log('Adding user...');
	users.insertOne({ email: email, password: stringHash(password) }).then((): void => {
		console.log('User added!');

        console.log(users.findOne({"email": email}));
        
	});
};
