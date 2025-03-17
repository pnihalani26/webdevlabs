var x, y, z;
var A, B, C;

x = 5;
y = 7;
z = x + y;
console.log(z);

A = "Hello ";
B = "world!";
C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length>z) {
    console.log(C);
}
else if (C.length<z) {
    console.log(z);
}
else if (C.length == z) {
    console.log("good job!")
}
    
var L1 = ["Watermelon", "Pinapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array) {
//     for (let i=0; i<array.length; i++) {
//         if (array[i] == "Banana") {
//             alert("We found a Banana in " + i);
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

function findTheBanana(array, arrayName) {
    array.forEach(function(currentValue, index, arr) {
        if (currentValue == "Banana") {
        alert("We found a Banana in the " + arrayName + " array");
        }
    });
}

findTheBanana(L1, "first");
findTheBanana(L2, "second");

function greetingFunc() {
    const d = new Date();
    const h = d.getHours();
    const E = document.getElementById("greeting");

    if (h < 12) {
        E.innerHTML = "Good morning! My name is Palomi";
    } else if (h < 18) {
        E.innerHTML = "Good afternoon! My name is Palomi";
    } else if (h < 20) {
        E.innerHTML = "Good evening! My name is Palomi";
    } else if (((h >= 20) && (h < 24)) || ((h >= 0) && (h < 5))) {
        E.innerHTML = "Good night! My name is Palomi";
    }
}

if (window.location.href.includes("index.html")) {
    greetingFunc();
}
