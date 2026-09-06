export {};
const promise = new Promise<string>(resolve=>{
    setTimeout(()=>{
    resolve("Hello async")
    },2000)
})

promise.then(message=>{
    console.log(message)
})