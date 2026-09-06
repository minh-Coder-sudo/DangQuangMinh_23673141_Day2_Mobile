// Bai 15
export {};

async function multiplyByThree(number: number): Promise<number> {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return number * 3;
}

async function main(): Promise<void> {
    console.log(await multiplyByThree(1));
    console.log(await multiplyByThree(2));
    console.log(await multiplyByThree(3));
}

main().catch(error => console.error(error));
