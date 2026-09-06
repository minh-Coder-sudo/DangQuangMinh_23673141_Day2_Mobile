// Bai 14
export {};

async function multiplyByThree(number: number): Promise<number> {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return number * 3;
}

multiplyByThree(5).then(result => console.log(result));
