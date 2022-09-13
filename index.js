const input = document.querySelectorAll(".no");
const buttonCheck = document.querySelector("#check");
const msg = document.querySelector("#msg");
const image = document.querySelector(".img");
image.style.display = "none";
function showDsiplay(message,src,flag){
    if(flag == 0){
        
    msg.innerText = message ;
   
    image.src = src;
    image.style.display = "block";
    
    }

    else{
        msg.innerText = message;
        // msg.style.color = "black";
        image.src = src;
        image.style.display = "block";
    }
 
};
function predictTheOutput(){
    // image.style.display = "none";
    if(input[0].value.length == 0 &&
        input[1].value.length == 0 &&
        input[2].value.length == 0){
            // console.log("void");
        showDsiplay("Blank values are not valid to see the output 👀","./img/why.gif",0);

    }
    else if(input[0].value < 0 &&
        input[1].value < 0 &&
        input[2].value < 0){
            
                showDsiplay("Negative  values are not valid to see the output 👀","./img/why.gif",0)
            }
          else  if(input[0].value == 0 &&
                input[1].value == 0 &&
                input[2].value == 0){
                    // console.log("void");
                showDsiplay("Zero as a value for inputs  is not valid to see the output 👀","./img/why.gif",0);
        
            }
    
    else{
        let total = Number(input[0].value) + Number(input[1].value) + Number(input[2].value);
        if(total == 180){
            showDsiplay("Yeahh it's a triangle 💥","./img/happy.gif",1);
           
        }
        else{
            showDsiplay("Sorry, it's not a triangle 🙃","./img/saddy.gif",1);
          
        }
    }


};
buttonCheck.addEventListener('click',predictTheOutput);