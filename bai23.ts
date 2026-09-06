// Bai 23
export {};

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchCompletedTodos(): Promise<Todo[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const todos: Todo[] = await response.json();
    return todos.filter(todo => todo.completed);
}

fetchCompletedTodos()
    .then(todos => console.log(todos))
    .catch(error => console.error(error));
