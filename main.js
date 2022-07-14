let gradeOne = 56;
let gradeTwo = 78;
let gradeThree = 88;

const finalGrade = (gradeOne, gradeTwo, gradeThree) => {
  if ((gradeOne < 0 || gradeOne > 100) || (gradeTwo < 0 || gradeTwo > 100) || (gradeThree < 0 || gradeThree > 100)) {
    return 'You have entered an invalid grade.';
  } else {
    const average = (gradeOne + gradeTwo + gradeThree) / 3;
    if (average > 0 && average <= 59) {
      return 'F';
    } else if (average >= 60 && average <= 69) {
      return 'D';
    } else if (average >= 70 && average <= 79) {
      return 'C';
    } else if (average >= 80 && average <= 89) {
      return 'B';
    } else if (average >= 90 && average <= 100) {
      return 'A';
    }
  }
};


console.log(finalGrade(99, 92, 95));
