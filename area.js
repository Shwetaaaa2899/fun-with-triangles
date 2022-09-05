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
    if(inputList[0].value.length == 0 || inputList[1].value.length == 0){
        outPut.innerText = "Kindly enter the values to see the output 👀";
      }
      else{
    const ans = fetchAns(inputList[0].value,inputList[1].value);
    outPut.innerText = "Area of a triangle  is " +ans +" units";
      }
};
calcAreaButton.addEventListener('click',calculateArea)