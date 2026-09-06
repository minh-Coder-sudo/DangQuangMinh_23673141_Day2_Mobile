// Bai 17
export {};

function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task done"), time);
    });
}

async function main(): Promise<void> {
    const promises = [simulateTask(1000), simulateTask(2000), simulateTask(3000)];
    for await (const result of promises) {
        console.log(result);
    }
}

main().catch(error => console.error(error));
