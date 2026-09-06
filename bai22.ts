// Bai 22
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

async function main(): Promise<void> {
    const results = await Promise.all([1, 2, 3].map(id => fetchTodo(id)));
    results.forEach(todo => console.log(todo));
}

main().catch(error => console.error(error));
