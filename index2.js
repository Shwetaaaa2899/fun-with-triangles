const ansKey =["Equilateral","Right","equilateral triangle","False","A triangle with no equal sides.","ASA","Equal"];
const button = document.querySelector("#submit-form");
const form = document.querySelector(".quiz-form");
const outPut = document.querySelector("#msg");
function calculateResults(){
    // alert("CLicked");
const formData = new FormData(form);
let score = 0;
let ind = 0;
for(let i of formData.values()){
    // console.log(i);
    if(i === ansKey[ind]){
        score += 1
    };
    ind += 1;
};
if(score == 7){
    outPut.innerText ="You have scored "+ score +" marks 💥 ";
}
outPut.innerText ="You have scored "+ score +" marks";

};
button.addEventListener('click',calculateResults);