
/* ======================================
   COMPLETE COURSE FUNCTION
   Saves completed course + updates count
====================================== */

// function completeCourse(courseName){

// Get stored completed courses
// let completedCourses = JSON.parse(localStorage.getItem("completedCourses")) || [];

// Check if course already completed
// if(!completedCourses.includes(courseName)){

// completedCourses.push(courseName);

// Save updated list
// localStorage.setItem("completedCourses", JSON.stringify(completedCourses));

// alert("🎉 " + courseName + " course marked as completed!");

// }
// else{

// alert("✅ You already completed this course.");

// }

// Update UI count if dashboard element exists
// let courseElement = document.getElementById("completedCourses");

// if(courseElement){

// courseElement.innerText = completedCourses.length;

// }

// }

/* ======================================
   COMPLETE COURSE FUNCTION
====================================== */

function completeCourse(courseName){

let completedCourses = JSON.parse(localStorage.getItem("completedCourses")) || [];

/* Prevent duplicates */
if(!completedCourses.includes(courseName)){

completedCourses.push(courseName);

localStorage.setItem("completedCourses", JSON.stringify(completedCourses));

alert("🎉 " + courseName.toUpperCase() + " course marked as completed!");

}
else{
alert("✅ You already completed this course.");
}

/* Update UI count */
let courseElement = document.getElementById("completedCourses");

if(courseElement){
courseElement.innerText = completedCourses.length;
}
}