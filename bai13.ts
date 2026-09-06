// Bai 13
export {};

function failAfterOneSecond(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Something went wrong")), 1000);
    });
}

async function main(): Promise<void> {
    try {
        await failAfterOneSecond();
    } catch (error) {
        console.error(error instanceof Error ? error.message : error);
    }
}

main().catch(error => console.error(error));
