
/* Import functions from quiz.js */

// const {
// calculatePercentage,
// calculateGrade
// } = require("../js/quiz");


/* =========================
   Percentage Calculation Test
========================= */

// test("percentage calculation", () => {

// let percent = calculatePercentage(2,3);

// expect(percent).toBe(66.66666666666666);

// });


/* =========================
   Grade A Test
========================= */

// test("grade should be A when percentage >= 80", () => {

// let grade = calculateGrade(85);

// expect(grade).toBe("A");

// });
 

/* =========================
   Grade B Test
========================= */

// test("grade should be B when percentage between 50 and 79", () => {

// let grade = calculateGrade(60);

// expect(grade).toBe("B");

// });


/* =========================
   Fail Grade Test
========================= */

// test("grade should be Fail when percentage < 50", () => {

// let grade = calculateGrade(30);

// expect(grade).toBe("Fail");

// });


/* =========================
   Score Calculation Test
========================= */

// test("score calculation logic", () => {

// let percent = calculatePercentage(4,10);

// expect(percent).toBe(40);

// });

const {
calculatePercentage,
calculateGrade
} = require("../js/quiz");

/* ========================= */
test("percentage calculation", () => {
let percent = calculatePercentage(2,3);
expect(percent).toBe(66.66666666666666);
});

/* ========================= */
test("grade A", () => {
let grade = calculateGrade(85);
expect(grade).toBe("A");
});

/* ========================= */
test("grade B", () => {
let grade = calculateGrade(60);
expect(grade).toBe("B");
});

/* ========================= */
test("fail grade", () => {
let grade = calculateGrade(30);
expect(grade).toBe("Fail");
});

/* ========================= */
test("score logic", () => {
let percent = calculatePercentage(4,10);
expect(percent).toBe(40);
});