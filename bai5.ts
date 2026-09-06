export {};
function promiseWithTime(time:number) : Promise<string>{
    const promise = new Promise<string>(resolve=>{
    setTimeout(()=>{
    resolve("Task done")
    },time)
})
return promise
}

promiseWithTime(2000)
.then(message=>{
    console.log(message)
})


