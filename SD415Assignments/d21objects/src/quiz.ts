export interface StudentQuiz {
  studentId: number,
  quizAnswers: number[]
}

export function gradeStudent(studentAnswers: number[], correct: number[]): number {
// //IMPLEMENT THIS
// const answers = stu.quizAnswers;
//loop through the parallel arrays and count the matches and return that;
let numCorrect = 0
for (let i=0; i<studentAnswers.length;i++){
  if(studentAnswers[i]===correct[i]){
    numCorrect = numCorrect + 1
  }
}
return numCorrect;
}




export function gradeQuiz(students: StudentQuiz[], correctAnswers: number[]): number[] {

const numCorrect:number[]=[];
for(const student of students){
  numCorrect.push(gradeStudent(student.quizAnswers, correctAnswers))
}
return numCorrect;
}
// console.log("expect [3,2,3", gradeQuiz(correctAnswers), [])



export function gradeQuizLabeled(students: StudentQuiz[], correctAnswers: number[]): { studentId: number, numCorrect: number }[] {


const labeledScores:{studentId:number; numCorrect:number}[]=[];
for(const student of students){
  labeledScores.push({studentId:student.studentId, numCorrect:gradeStudent(student.quizAnswers, correctAnswers)})
}

return labeledScores;
}