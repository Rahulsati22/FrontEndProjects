let helper = [
  {
    question: "Javascript is an _______ language?",
    option1: "Object-Oriented",
    option2: "Object-Based",
    option3: "Procedural",
    option4: "None of the above",
    ans: "option1",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    option1: "getElementById()",
    option2: "getElementsByClassName()",
    option3: "All of the above",
    option4: "None of the above",
    ans: "option3",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    option1: "var",
    option2: "let",
    option3: "const",
    option4: "All of the above",
    ans: "option4",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    option1: "Throws an error",
    option2: "Ignores it",
    option3: "Gives a warning",
    option4: "None of the above",
    ans: "option2",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    option1: "in",
    option2: "is in",
    option3: "exists",
    option4: "lies",
    ans: "option1",
  },
];
let count = 0;
let question_no = 0;
let question = document.querySelector("#question");
let opt1 = document.querySelector("#option11");
let opt2 = document.querySelector("#option22");
let opt3 = document.querySelector("#option33");
let opt4 = document.querySelector("#option44");
let btn = document.querySelector("#buttonn");
let cont = document.querySelector("#final_result_container");
let ans = document.querySelectorAll(".answer_element");
let score = document.getElementById("score");
// let play_again = document.getElementsByTagName("button");
let play_score_area = document.getElementById("final_result_container");

function load_questions() {
  question.innerText = helper[question_no].question;
  opt1.innerText = helper[question_no].option1;
  opt2.innerText = helper[question_no].option2;
  opt3.innerText = helper[question_no].option3;
  opt4.innerText = helper[question_no].option4;
}
load_questions();
function isCorrect()
{
     let answer;
     for (let i = 0; i < ans.length; i++)
     {
        if (ans[i].checked)
        {
            answer = ans[i];
            console.log(ans[i].checked);
        }
     }
    return answer.id;
    
}
function deselect()
{
    let answer;
    ans.forEach((element)=>{
        if (element.checked)
        {
            element.checked = false;
        }
    })
}
btn.addEventListener("click", () => {
   let check_answer = isCorrect();
   if (check_answer === helper[question_no].ans)
   {
    count++;
   }
  question_no++;
  if (question_no == helper.length)
  {
    deselect();
     play_score_area.innerHTML=`<h2>Your score is ${count}/${helper.length}</h2>
                                 <button onclick="location.reload()">Play Again</button>`
                                 play_score_area.classList.remove("hide");
    return;
  }
  else
  {
    deselect();
    load_questions();
     
  }
});
 
