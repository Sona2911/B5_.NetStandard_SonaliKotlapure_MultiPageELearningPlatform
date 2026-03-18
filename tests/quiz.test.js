


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