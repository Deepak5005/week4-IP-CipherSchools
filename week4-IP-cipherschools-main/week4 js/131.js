// set interval
// console.log("script start");
// set Interval (() =>{
//     console.log(total);
//     console.log(Math.random());
// }, 500);
// console.log("script end");
const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(() =>{
    const red=math.floor(Math.random() * 126);
    const green=math.floor(Math.random() * 126);
    const blue=math.floor(Math.random() * 126);
    const rgba = `rgba(${red},${green}, ${blue})`;
    body.style.background = rgba;
}, 1000);

button.addEventListener("click", () =>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
});

console.log(intervalId);










