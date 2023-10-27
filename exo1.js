var textContent = document.getElementById("text-content");
var boldBtn = document.querySelector(".bold");
var italicBtn = document.querySelector(".italic");
var underlineBtn = document.querySelector(".underline");
var clearBtn = document.querySelector(".clear");
var textStyles = ["bold", "italic", "underline"];

var boldText = () => {
    if (textContent.style.fontWeight !== "bold") {
        textContent.style.fontWeight = "bold";
    }else{
        textContent.style.fontWeight = "normal";
    }
}

var italicText = () => {
    if (textContent.style.fontStyle !== "italic") {
        textContent.style.fontStyle = "italic";
    }else{
        textContent.style.fontStyle = "normal";
    }
}
var underlineText = () => {
    if (textContent.style.textDecoration !== "underline") {
        textContent.style.textDecoration = "underline";
    }else{
        textContent.style.textDecoration = "none";
    }
}



var clearStyles = () => {
    textContent.style.fontWeight = "normal";
    textContent.style.fontStyle = "normal";
    textContent.style.textDecoration = "none"; 
}

boldBtn.addEventListener("click", boldText);
italicBtn.addEventListener("click", italicText);
underlineBtn.addEventListener("click", underlineText);
clearBtn.addEventListener("click", clearStyles);