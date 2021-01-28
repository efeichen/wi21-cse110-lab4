let d = new Date();
let time = d.toLocaleDateString();

setInterval(() => {
    console.log(time);
}, 1000);