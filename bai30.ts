// Bai 30
export {};

async function main(): Promise<void> {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/invalid-route",
    ];
    const results = await Promise.allSettled(
        urls.map(async url => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        }),
    );

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(urls[index], "Success:", result.value);
        } else {
            console.error(urls[index], "Failure:", result.reason);
        }
    });
}

main().catch(error => console.error(error));
