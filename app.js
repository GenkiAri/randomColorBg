
function getRandomRgbNumber () {
    min = Math.ceil(0);
    max = Math.floor(16777216);
    return Math.floor(Math.random() * (max - min) + min);
};


let a = getRandomRgbNumber().toString(16);

console.log(a);

document.getElementById("bgColor").style.background = "#" + a;