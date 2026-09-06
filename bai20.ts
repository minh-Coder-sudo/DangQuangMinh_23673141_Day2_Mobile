// Bai 20
export {};

interface User {
    id: number;
    name: string;
}

async function fetchUser(id: number): Promise<User> {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return { id, name: `User ${id}` };
}

async function withTimeout<T>(task: Promise<T>, timeoutMs: number): Promise<T> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error("API call timed out")), timeoutMs);
    });

    try {
        return await Promise.race([task, timeout]);
    } finally {
        clearTimeout(timer);
    }
}

async function main(): Promise<void> {
    console.log(await withTimeout(fetchUser(1), 2000));
    const slowApi = new Promise<User>(resolve => {
        setTimeout(() => resolve({ id: 2, name: "User 2" }), 3000);
    });
    try {
        console.log(await withTimeout(slowApi, 2000));
    } catch (error) {
        console.error(error instanceof Error ? error.message : error);
    }
}

main().catch(error => console.error(error));
