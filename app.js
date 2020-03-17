
function getRandomRgbNumber () {
    min = Math.ceil(0);
    max = Math.floor(16777216);
    return Math.floor(Math.random() * (max - min) + min);
};

function getRandomRadius () {
    min = Math.ceil(1);
    max = Math.floor(101);
    return Math.floor(Math.random() * (max - min) + min);
};



function changeBgColorResult () {
    let a = getRandomRgbNumber().toString(16);
    document.getElementById("bgColor").style.background = "#" + a;
    document.getElementById("colorCode").textContent = "Hex color code " + a;

    console.log(a);

    let b = getRandomRadius() + 'px'
    console.log(b);
    document.getElementById("bgColor").style.borderRadius = b;
};

