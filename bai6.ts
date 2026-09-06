// Bai 6
export {};

function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task done"), time);
    });
}

Promise.all([simulateTask(1000), simulateTask(2000), simulateTask(3000)])
    .then(results => console.log(results))
    .catch(error => console.error(error));
