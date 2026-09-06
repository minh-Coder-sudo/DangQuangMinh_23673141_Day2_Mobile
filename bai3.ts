export {};
function failOneSecond() : Promise<never> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Something went wrong"))
        },1000)
    })
}

failOneSecond()
.catch(error=>{
    console.log(error.message)
})