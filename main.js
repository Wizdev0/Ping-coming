const input = document.getElementById("input");
const button = document.getElementById("button");
const errorMess = document.getElementById("errorMess");

function isEmailValid(value) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
} 

/* LIVE VALIDATION */

input.addEventListener("input", () =>{

    if(isEmailValid(input.value)) {
        errorMess.style.display = "none";
        input.style.border = "1px solid  hsl(223, 87%, 63%)";   
    } else {
        errorMess.style.display = "flex";
        input.style.border = "1px solid hsl(354, 100%, 66%)";
    }
});

/* SUBMIT */

button.addEventListener("click", (e) =>{

    e.stopPropagation();

    if(input.value.trim() === "" || !isEmailValid(input.value)) {
        errorMess.style.display = "flex";
        input.style.border = "1px solid hsl(354, 100%, 66%)";

        input.value = "";
        input.placeholder = "example@gmail.com";
        input.classList.add("error-placeholder");
       
    } else {
        errorMess.style.display = "none";
        input.style.border = "1px solid  hsl(223, 87%, 63%)";   

        alert("We will get back to you");

            location.reload();
    }


  

});