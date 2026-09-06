export {};
function func() : Promise<number>{
    const promise = new Promise<number>((resolve,reject) => {
    const number = Math.floor(Math.random()*1000)
    if(number<=500){
        resolve(number)
    }else{
        reject(new Error("Number more than 500"))
    }
});
    return promise
}

func()
.then(number=>{
    console.log("Success: ",number)
})
.catch(error=>{
    console.log(error.message)
})