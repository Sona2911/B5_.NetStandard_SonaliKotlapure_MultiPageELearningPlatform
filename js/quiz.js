/* =========================
   QUIZ QUESTIONS FOR COURSES
========================= */

// const quizzes = {

// web:[
// {
// question:"HTML stands for?",
// options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language"],
// answer:"Hyper Text Markup Language"
// },
// {
// question:"Which language styles webpages?",
// options:["CSS","Python","SQL"],
// answer:"CSS"
// },
// {
// question:"JavaScript is used for?",
// options:["Frontend interaction","Database","Server"],
// answer:"Frontend interaction"
// }
// ],

// python:[
// {
// question:"Python is?",
// options:["Programming Language","Database","Browser"],
// answer:"Programming Language"
// },
// {
// question:"Which keyword defines function?",
// options:["def","function","create"],
// answer:"def"
// },
// {
// question:"Python comment symbol?",
// options:["#","//","<!-- -->"],
// answer:"#"
// }
// ],

// sql:[
// {
// question:"SQL stands for?",
// options:["Structured Query Language","Simple Query Language","System Query Language"],
// answer:"Structured Query Language"
// },
// {
// question:"Which command retrieves data?",
// options:["SELECT","DELETE","UPDATE"],
// answer:"SELECT"
// },
// {
// question:"Which command removes table?",
// options:["DROP","REMOVE","DELETE"],
// answer:"DROP"
// }
// ],

// java:[
// {
// question:"Java is?",
// options:["Programming Language","Database","Operating System"],
// answer:"Programming Language"
// },
// {
// question:"Java object keyword?",
// options:["new","create","object"],
// answer:"new"
// },
// {
// question:"Java file extension?",
// options:[".java",".py",".js"],
// answer:".java"
// }
// ]

// };


/* =========================
   CURRENT QUIZ DATA
========================= */

// let currentQuiz = [];
// let selectedCourse = "";


/* =========================
   START QUIZ
========================= */

// function startQuiz(course){

// selectedCourse = course;

// currentQuiz = quizzes[course];

// renderQuiz();

// }


/* =========================
   RENDER QUESTIONS
========================= */

// function renderQuiz(){

// let container = document.getElementById("quizContainer");

// container.innerHTML = "";

// currentQuiz.forEach((q,index)=>{

// let html = `
// <div class="card p-3 mt-3">

// <h5>Q${index+1}. ${q.question}</h5>
// `;

// q.options.forEach(opt=>{

// html += `
// <label>
// <input type="radio" name="q${index}" value="${opt}">
// ${opt}
// </label>
// <br>
// `;

// });

// html += `</div>`;

// container.innerHTML += html;

// });

// }


/* =========================
   SUBMIT QUIZ
========================= */

// function submitQuiz(){

// let score = 0;

// currentQuiz.forEach((q,index)=>{

// let ans = document.querySelector(`input[name="q${index}"]:checked`);

// if(ans && ans.value === q.answer){
// score++;
// }

// });


/* =========================
   CALCULATE RESULT
========================= */

// let percent = (score/currentQuiz.length)*100;

// let grade;

// if(percent >= 80){
// grade = "A";
// }
// else if(percent >= 50){
// grade = "B";
// }
// else{
// grade = "Fail";
// }


/* =========================
   DISPLAY RESULT
========================= */

// document.getElementById("result").innerHTML = `

// <div class="card p-3 mt-3 text-center">

// <h4>${selectedCourse.toUpperCase()} Quiz Result</h4>

// <p><strong>Score:</strong> ${score}/${currentQuiz.length}</p>

// <p><strong>Percentage:</strong> ${percent.toFixed(2)}%</p>

// <p><strong>Grade:</strong> ${grade}</p>

// </div>

// `;


/* =========================
   STORE LAST RESULT
========================= */

// localStorage.setItem("quizScore", percent.toFixed(2));
// localStorage.setItem("quizGrade", grade);


/* =========================
   COUNT QUIZ ATTEMPTS
========================= */

// let attempts = localStorage.getItem("quizAttempts") || 0;

// attempts++;

// localStorage.setItem("quizAttempts", attempts);


/* =========================
   STORE QUIZ HISTORY
========================= */

// let results = JSON.parse(localStorage.getItem("quizResults")) || [];

// results.push({

// course:selectedCourse,
// score:score,
// total:currentQuiz.length,
// percentage:percent.toFixed(2),
// grade:grade

// });

// localStorage.setItem("quizResults", JSON.stringify(results));


/* =========================
   UPDATE COMPLETED COURSES
========================= */

// let completedCourses = localStorage.getItem("completedCourses") || 0;

// if(percent >= 50){

// completedCourses++;

// localStorage.setItem("completedCourses", completedCourses);

// }

// }

const quizzes = {
web:[
{question:"HTML stands for?",options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language"],answer:"Hyper Text Markup Language"},
{question:"Which language styles webpages?",options:["CSS","Python","SQL"],answer:"CSS"},
{question:"JavaScript is used for?",options:["Frontend interaction","Database","Server"],answer:"Frontend interaction"}
],
python:[
{question:"Python is?",options:["Programming Language","Database","Browser"],answer:"Programming Language"},
{question:"Which keyword defines function?",options:["def","function","create"],answer:"def"},
{question:"Python comment symbol?",options:["#","//","<!-- -->"],answer:"#"}
],
sql:[
{question:"SQL stands for?",options:["Structured Query Language","Simple Query List","Structured Question Language"],answer:"Structured Query Language"},
{
 question:"Which command retrieves data?", 
 options:["SELECT","DELETE","UPDATE"], 
 answer:"SELECT" 
 },
 {
question:"Which command removes table?", 
 options:["DROP","REMOVE","DELETE"], 
 answer:"DROP" 
}
],
java:[
{question:"Java is?",options:["Programming Language","Database","Browser"],answer:"Programming Language"},
{
question:"Java object keyword?",
options:["new","create","object"],
answer:"new"
},
{
question:"Java file extension?",
options:[".java",".py",".js"],
answer:".java"
}
]
};

let currentQuiz = [];
let selectedCourse = "";

/* =========================
   START QUIZ (ASYNC LOADING)
========================= */
async function startQuiz(course){

document.getElementById("quizContainer").innerHTML = "Loading quiz...";

await new Promise(resolve => setTimeout(resolve,1000));

selectedCourse = course;
currentQuiz = quizzes[course];

document.getElementById("result").innerHTML = "";

renderQuiz();
}

/* =========================
   RENDER QUIZ
========================= */
function renderQuiz(){

let container = document.getElementById("quizContainer");
container.innerHTML = "";

currentQuiz.forEach((q,index)=>{

let html = `<div class="card p-3 mt-3">
<h5>Q${index+1}. ${q.question}</h5>`;

q.options.forEach(opt=>{
html += `
<label>
<input type="radio" name="q${index}" value="${opt}">
${opt}
</label><br>`;
});

html += `</div>`;
container.innerHTML += html;
});

/* onchange event */
document.querySelectorAll("input[type='radio']")
.forEach(r=>{
r.onchange = ()=> console.log("Answer selected");
});
}

/* =========================
   SUBMIT QUIZ
========================= */
function submitQuiz(){

let score = 0;

currentQuiz.forEach((q,index)=>{
let ans = document.querySelector(`input[name="q${index}"]:checked`);
if(ans && ans.value === q.answer) score++;
});

let percent = calculatePercentage(score,currentQuiz.length);
let grade = calculateGrade(percent);

/* FEEDBACK */
let feedback;
switch(true){
case percent >= 80: feedback="Excellent"; break;
case percent >= 50: feedback="Good"; break;
default: feedback="Needs Improvement";
}

/* RESULT UI */
document.getElementById("result").innerHTML = `
<div class="card p-3 mt-3 text-center">
<h4>${selectedCourse.toUpperCase()} Result</h4>
<p>Score: ${score}/${currentQuiz.length}</p>
<p>Percentage: ${percent.toFixed(2)}%</p>
<p>Grade: ${grade}</p>
<p>${feedback}</p>
</div>`;

/* =========================
   STORAGE (FIXED STRUCTURE)
========================= */

/* Save latest score */
localStorage.setItem("quizScore", percent);
localStorage.setItem("quizGrade", grade);

/* Attempts count */
let attempts = parseInt(localStorage.getItem("quizAttempts")) || 0;
localStorage.setItem("quizAttempts", attempts + 1);

/* Last 5 results */
let results = JSON.parse(localStorage.getItem("quizResults")) || [];
results = results.slice(-4);

results.push({
course:selectedCourse,
score,
total:currentQuiz.length,
percentage:percent.toFixed(2),
grade
});

localStorage.setItem("quizResults", JSON.stringify(results));

/* Completed courses handled in storage.js */
if(percent >= 50 && typeof completeCourse === "function"){
completeCourse(selectedCourse);
}
}

/* =========================
   CALCULATIONS (FOR TESTING)
========================= */
function calculatePercentage(score,total){
return (score/total)*100;
}

function calculateGrade(percent){
if(percent>=80) return "A";
else if(percent>=50) return "B";
else return "Fail";
}

/* =========================
   EXPORT FOR JEST
========================= */
if(typeof module !== "undefined"){
module.exports = { calculatePercentage, calculateGrade };
}