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
    
$(document).ready(function() {
    $("#fullBio").hide();

    $("#readMoreButton").click(function() {
        if ($("#fullBio").is(":visible")) {
            $("#fullBio").hide();
            $("#shortBio").show();
            $("#readMoreButton").text("Read More");
        }
        else {
            $("#fullBio").show();
                $("#readMoreButton").text("Read Less");
        }
    });
});
// var L1 = ["Watermelon", "Pinapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array) {
//     for (let i=0; i<array.length; i++) {
//         if (array[i] == "Banana") {
//             alert("We found a Banana in " + i);
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// function findTheBanana(array, arrayName) {
//     array.forEach(function(currentValue, index, arr) {
//         if (currentValue == "Banana") {
//         alert("We found a Banana in the " + arrayName + " array");
//         }
//     });
// }

// findTheBanana(L1, "first");
// findTheBanana(L2, "second");

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

function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += " " + y;
}

// function showList() {
//     document.getElementById("myList").style.display = "block";
//     var showButton = document.getElementById("showButton");
//     if (showButton) {
//         showButton.style.display = "none";
//     }
// }


function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const validationMessage = document.getElementById("validationMessage");
  
    validationMessage.innerHTML = "";
    validationMessage.className = "";
  
    if (!name.value) {
      name.setCustomValidity("You forgot to enter your name!");
    } else {
      name.setCustomValidity(""); 
    }
      if (!email.value) {
      email.setCustomValidity("We need your email address to contact you!");
    } else {
      email.setCustomValidity("");
    }
  
    if (!name.checkValidity()) {
        validationMessage.innerHTML = name.validationMessage;
      return false;
    }
  
    if (!email.checkValidity()) {
        validationMessage.innerHTML = email.validationMessage;
      return false;
    }
  
    validationMessage.innerHTML = "Form submitted successfully!";
    validationMessage.className = "success";
    return false;
  }



function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        const advice = data.slip.advice;
        document.getElementById("adviceText").innerText = advice;
    })
    .catch(error => {
        document.getElementById("adviceText").innerText = "Sorry, we couldn't get the advice. Please try again later.";
        console.error("Error:", error);
    });
}



document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".navlinks");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

$(document).ready(function() {
    // Function to highlight the active link
    function highlightActiveLink() {
        const currentPath = window.location.pathname; // Get the current path
        $('.navlinks a').each(function() {
            // Compare the link's href with the current path
            if (this.pathname === currentPath) {
                $(this).addClass('active'); // Add the active class
            } else {
                $(this).removeClass('active'); // Remove active class if not matching
            }
        });
    }

    // Call the function to highlight the active link when the document is ready
    highlightActiveLink();
});
