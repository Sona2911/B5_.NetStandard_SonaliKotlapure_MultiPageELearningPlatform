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
   START QUIZ (FIXED)
========================= */
function startQuiz(course){

selectedCourse = course.toLowerCase();  // ✅ FIX
localStorage.setItem("courseName", selectedCourse);

document.getElementById("quizContainer").innerHTML = "Loading quiz...";

setTimeout(()=>{
currentQuiz = quizzes[selectedCourse];  // ✅ FIX
document.getElementById("result").innerHTML = "";
renderQuiz();
},1000);
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
   SUBMIT QUIZ (FIXED)
========================= */
window.submitQuiz = function(){

let answers = [];
let score = 0; // ✅ ADDED

currentQuiz.forEach((q,index)=>{
let ans = document.querySelector(`input[name="q${index}"]:checked`);
let value = ans ? ans.value.trim() : "";

answers.push(value);

// ✅ CALCULATE SCORE
if(value === q.answer){
  score++;
}
});

/* ✅ CALCULATE PERCENT + GRADE */
let percent = Math.round((score / currentQuiz.length) * 100);
let grade;

if(percent >= 80) grade = "A";
else if(percent >= 50) grade = "B";
else grade = "Fail";

/* 🔥 SAVE DATA FOR PROFILE PAGE */
localStorage.setItem("quizScore", percent);
localStorage.setItem("quizGrade", grade);


let attempts = parseInt(localStorage.getItem("quizAttempts")) || 0;
localStorage.setItem("quizAttempts", attempts + 1);

let results = JSON.parse(localStorage.getItem("quizResults")) || [];
results = results.slice(-4);


results.push({
    course: selectedCourse,
    score: score,
    total: currentQuiz.length,
    percentage: percent,
    grade: grade
});

localStorage.setItem("quizResults", JSON.stringify(results));
/* ✅ SAVE COMPLETED COURSES (FIX) */
let completedCourses = JSON.parse(localStorage.getItem("completedCourses")) || [];

if(!completedCourses.includes(selectedCourse)){
    completedCourses.push(selectedCourse);
}

localStorage.setItem("completedCourses", JSON.stringify(completedCourses));
/* 🔥 MAP COURSE → QUIZ ID */
let quizMap = {
  "web": 17,
  "python": 18,
  "sql": 19,
  "java": 20
};

let quizId = quizMap[selectedCourse];

/* DEBUG */
console.log("Selected Course:", selectedCourse);
console.log("QuizId:", quizId);
console.log("Answers Sent:", answers);

/* API CALL */
fetch(`http://localhost:5117/api/quizzes/${quizId}/submit`, {
method:"POST",
headers:{ "Content-Type":"application/json" },
body: JSON.stringify(answers)
})
.then(res=>res.json())
.then(data=>{
document.getElementById("result").innerHTML = `
<h3 style="color:green;">Your Score: ${data.score}</h3>
`;
});

}

/* =========================
   CALCULATIONS (FOR TESTING)
========================= */
function calculatePercentage(score,total){
return (score/total)*100;
}

function calculateGrade(percent){
if(percent >= 80) return "A";
else if(percent >= 50) return "B";
else return "Fail";
}

/* =========================
   EXPORT FOR JEST
========================= */
if(typeof module !== "undefined"){
module.exports = { calculatePercentage, calculateGrade };
}