const input = document.querySelectorAll(".no");
const button = document.querySelector("#check");
const msg = document.querySelector("#msg");
const image = document.querySelector(".img");
image.style.display = "none";
function predictTheOutput(){
    // image.style.display = "none";
    if(input[0].value.length == 0 ||
        input[1].value.length == 0 ||
        input[2].value.length == 0){
            console.log("void");
msg.innerText = "Kindly enter the values to see the output 👀";
}
else{
    let total = Number(input[0].value) + Number(input[1].value) + Number(input[2].value);
    if(total == 180){
        msg.innerText = "Yeahh it's a triangle 💥";
        image.src = "./img/happy.gif";
        image.style.display = "block";
    }
    else{
        msg.innerText  = "Sorry, it's not a triangle 🙃";
        image.src = "./img/saddy.gif";
        image.style.display = "block";
    }
}


};
button.addEventListener('click',predictTheOutput);