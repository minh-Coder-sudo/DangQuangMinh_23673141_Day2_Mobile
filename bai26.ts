// Bai 26
export {};

async function main(): Promise<void> {
    console.log("Waiting...");
    await new Promise<void>(resolve => setTimeout(resolve, 5000));
    console.log("Finished waiting 5 seconds");
}

main().catch(error => console.error(error));
