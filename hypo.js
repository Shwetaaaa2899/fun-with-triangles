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
  if(side1.value.length == 0 || side2.value.length == 0){
    outPut.innerText = "Kindly enter the values to see the output 👀";
  }
  else{
  const ans = calculateSquares(base,height);
  outPut.innerText = "The length of hypotenuse is: " +ans;
  }
};
buttonHypo.addEventListener('click',calculateHypotenuse);