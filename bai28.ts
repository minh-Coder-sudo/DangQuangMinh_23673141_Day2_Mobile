// Bai 28
export {};

async function processTask(id: number): Promise<string> {
    console.log(`Starting task ${id}`);
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return `Task ${id} done`;
}

async function batchProcess(): Promise<void> {
    const results = await Promise.all([1, 2, 3, 4, 5].map(id => processTask(id)));
    console.log(results);
}

batchProcess().catch(error => console.error(error));
