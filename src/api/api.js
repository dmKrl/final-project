const urlRegister = 'http://localhost:8090/auth/register';

const fetchPostRegister = async ({
    email,
    password,
    city,
    firstName,
    lastName,
}) => {
    const response = await fetch(urlRegister, {
        method: 'POST',
        url: '/auth/register',
        body: JSON.stringify({
            email,
            password,
            city,
            name: firstName,
            surname: lastName,
        }),
        headers: {
            'content-type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};
export default fetchPostRegister;
