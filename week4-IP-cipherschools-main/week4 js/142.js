const URL = "https://jsonplaceholder.typicode.com/posts";
function  sendRequest(method,url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status <  300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something Went Wrong"));
            }
        }
        xhr.onerror = function(){
            reject(new Error("Something went wrong"))
        }
        xhr.send();
    })
} 
sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        //console.log(data)
        return id;
    })
    .then(id=>{
        const url = `${url}/${id}`;
        return sendRequest("GET",url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error =>{
        console.log(error);
    })





