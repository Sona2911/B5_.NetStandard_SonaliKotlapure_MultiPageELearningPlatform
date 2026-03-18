



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