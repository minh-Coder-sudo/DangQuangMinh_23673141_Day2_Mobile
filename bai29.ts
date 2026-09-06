// Bai 29
export {};

async function processTask(id: number): Promise<string> {
    console.log(`Starting task ${id}`);
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return `Task ${id} done`;
}

async function queueProcess(): Promise<void> {
    const queue = [1, 2, 3, 4, 5];
    for (const id of queue) {
        console.log(await processTask(id));
    }
}

queueProcess().catch(error => console.error(error));
