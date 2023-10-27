var textContent = document.getElementById("text-content");
var boldBtn = document.querySelector(".bold");
var italicBtn = document.querySelector(".italic");
var underlineBtn = document.querySelector(".underline");
var clearBtn = document.querySelector(".clear");

boldBtn.addEventListener("click", () => {   
    if (textContent.style.fontWeight !== "bold") {
        textContent.style.fontWeight = "bold";
    }else{
        textContent.style.fontWeight = "normal";
    }
});

italicBtn.addEventListener("click", () => {
    if (textContent.style.fontStyle !== "italic") {
        textContent.style.fontStyle = "italic";
    }else{
        textContent.style.fontStyle = "normal";
    }
});

underlineBtn.addEventListener("click", () => {
    if (textContent.style.textDecoration !== "underline") {
        textContent.style.textDecoration = "underline";
    }else{
        textContent.style.textDecoration = "none";
    }
});

clearBtn.addEventListener("click", () => {
    textContent.style.fontWeight = "normal";
    textContent.style.fontStyle = "normal";
    textContent.style.textDecoration = "none"; 
});
