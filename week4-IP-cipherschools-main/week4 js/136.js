//promise && setTimeout
// I want to review / reject promise after 2 seconds


function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
    .then(()=>{console.log("ressolved")})
    .catch(()=>{console.log("rejected")})














