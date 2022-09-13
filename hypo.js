const outPut = document.querySelector("#output");
const side1 = document.querySelector("#base");
const side2= document.querySelector('#height');
const buttonHypo = document.querySelector("#Hypotenuse");
function calculateSquares(a,b){
  a = Number(a.value);
  b = Number(b.value);
  ans = a*a + b*b;
  // console.log(ans);
  return Math.sqrt(ans);
}
function calculateHypotenuse(){
  console.log("connected");
  if(side1.value.length == 0 && side2.value.length == 0){
    outPut.style.color = "red";
    outPut.innerText = "Blank values are not valid  to see the output 👀";
  }
  else if(side1.value == 0 && side2.value == 0){
    outPut.style.color = "red";
    outPut.innerText = "Zero as a  value for the input is not valid  to see the output 👀";
  }
  else if(side1.value < 0 && side2.value < 0){
    outPut.style.color = "red";
    outPut.innerText = "Negative  values are not valid  to see the output 👀";
  }
  else{
  const ans = calculateSquares(base,height);
  outPut.style.color = "black";
  outPut.innerText = "The length of hypotenuse is: " +ans;
  }
};
buttonHypo.addEventListener('click',calculateHypotenuse);