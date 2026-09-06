// Bai 12
export {};

function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task done"), time);
    });
}

async function main(): Promise<void> {
    const result = await simulateTask(2000);
    console.log(result);
}

main().catch(error => console.error(error));
