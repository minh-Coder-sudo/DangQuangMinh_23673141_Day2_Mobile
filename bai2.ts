export {};
function func() : Promise<number>{
    const promise = new Promise<number>(resolve=>{
    setTimeout(()=>{
    resolve(10)
    },1000)
});
    return promise

}

func().then(message=>{
    console.log(message)
})