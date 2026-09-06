// Bai 21
export {};

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
async function fetchTodo(id: number): Promise<Todo> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json() as Promise<Todo>;
}

fetchTodo(1)
    .then(todo => console.log(todo))
    .catch(error => console.error(error));
