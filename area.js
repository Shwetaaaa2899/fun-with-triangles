const outPut = document.querySelector("#output");
const calcAreaButton = document.querySelector("#area");
const inputList = document.querySelectorAll(".side");
function fetchAns(a,b){

    a = Number(a);
    b = Number(b);
    const ans = a * b;
    const finalAns  = 0.5 * ans ;
    // console.log(ans);
    return finalAns;
}
function calculateArea(){
    if(inputList[0].value.length == 0 && inputList[1].value.length == 0 || (inputList[0].value.length == 0 || inputList[1].value.length == 0)){
      outPut.style.color = "red";
        outPut.innerText = "Do not give blank values  to see the output 👀";
    
      }
     else if(inputList[0].value == 0 && inputList[1].value== 0 || (inputList[0].value == 0 || inputList[1].value== 0)){
      outPut.style.color = "red";
        outPut.innerText = "Zero as a value for inputs is not valid to see the output 👀";
       
      }
     else  if(inputList[0].value <  0 && inputList[1].value<  0 || (inputList[0].value <  0 || inputList[1].value<  0)){
      outPut.style.color = "red";
        outPut.innerText = "Negative values are not valid to see the output 👀";
        
      }
      else{
    const ans = fetchAns(inputList[0].value,inputList[1].value);
    outPut.style.color = "black";
    outPut.innerText = "Area of a triangle  is " +ans +" units";
 
      }
};
calcAreaButton.addEventListener('click',calculateArea)