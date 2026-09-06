// Bai 24
export {};

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

async function postData(): Promise<Post> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId: 1,
            title: "Learning TypeScript",
            body: "Practicing async/await and Fetch API",
        }),
    });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json() as Promise<Post>;
}

postData()
    .then(post => console.log(post))
    .catch(error => console.error(error));
