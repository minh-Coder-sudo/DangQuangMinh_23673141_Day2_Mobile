// Bai 16
export {};

async function multiplyByThree(number: number): Promise<number> {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return number * 3;
}

async function main(): Promise<void> {
    const results = await Promise.all([
        multiplyByThree(1),
        multiplyByThree(2),
        multiplyByThree(3),
    ]);
    console.log(results);
}

main().catch(error => console.error(error));
