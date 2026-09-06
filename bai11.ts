// Bai 11
export {};

async function sayHello(): Promise<void> {
    const message = await new Promise<string>(resolve => {
        setTimeout(() => resolve("Hello Async"), 2000);
    });
    console.log(message);
}

sayHello().catch(error => console.error(error));
