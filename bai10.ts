// Bai 10
export {};

function runTask(shouldFail: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Something went wrong"));
            } else {
                resolve("Task done");
            }
        }, 1000);
    });
}

for (const shouldFail of [false, true]) {
    runTask(shouldFail)
        .then(result => console.log(result))
        .catch(error => console.error(error.message))
        .finally(() => console.log("Done"));
}
