export function gradeStudent(studentAnswers, correct) {
    // //IMPLEMENT THIS
    // const answers = stu.quizAnswers;
    //loop through the parallel arrays and count the matches and return that;
    let numCorrect = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === correct[i]) {
            numCorrect = numCorrect + 1;
        }
    }
    return numCorrect;
}
export function gradeQuiz(students, correctAnswers) {
    const numCorrect = [];
    for (const student of students) {
        numCorrect.push(gradeStudent(student.quizAnswers, correctAnswers));
    }
    return numCorrect;
}
// console.log("expect [3,2,3", gradeQuiz(correctAnswers), [])
export function gradeQuizLabeled(students, correctAnswers) {
    const labeledScores = [];
    for (const student of students) {
        labeledScores.push({ studentId: student.studentId, numCorrect: gradeStudent(student.quizAnswers, correctAnswers) });
    }
    return labeledScores;
}
