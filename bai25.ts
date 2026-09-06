// Bai 25
export {};

async function downloadFile(fileName: string): Promise<void> {
    console.log(`Downloading ${fileName}...`);
    await new Promise<void>(resolve => setTimeout(resolve, 3000));
    console.log(`Downloaded ${fileName}`);
}

downloadFile("document.pdf").catch(error => console.error(error));
