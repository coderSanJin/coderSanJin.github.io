// let myHeading = document.querySelector("h1");
// myHeading.textContent = "hello world!";

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕痛!")
// })

// 匿名函数的另外一种写法  箭头函数
// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕痛!")
// })


let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字!");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
}