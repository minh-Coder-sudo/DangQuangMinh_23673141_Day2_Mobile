// Bai 18
export {};

interface User {
    id: number;
    name: string;
}

async function fetchUser(id: number): Promise<User> {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return { id, name: `User ${id}` };
}

fetchUser(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));
