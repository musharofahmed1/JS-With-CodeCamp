//create getAverage function
function getAverage(testScore){
    let totalScore = 0;
    for(let score of testScore){
        totalScore += score;
    }
    return totalScore / testScore.length;
}
// console.log(getAverage([56,76,88])) //perfectly works
//create getGrade function

function getGrade(studentScore){
    if(studentScore==100){
        return "A+";
    }
    else if(studentScore>=90 && studentScore<= 99){
        return "A";
    }
    else if(studentScore>=90 && studentScore<= 99){
        return "A";
    }
    else if(studentScore>=80 && studentScore<= 89){
        return "B";
    }
    else if(studentScore>=70 && studentScore<= 79){
        return "C";
    }
    else if(studentScore>=60 && studentScore<= 69){
        return "D";
    }
    else if(studentScore>=0 && studentScore<= 59){
        return "F";
    }
}

// console.log(getGrade(96)); //perfectly works the function

//create hasPassingGrade
function hasPassingGrade(score){

    if(getGrade(score)== "F"){
        return false
    }
    else{
        return true
    }
}

//console.log(hasPassingGrade(100)); //perfectly work

// Create studentMsg function
function studentMsg(arrayOfScores, studentScore) {
    const average = getAverage(arrayOfScores).toFixed(2);
    const grade = getGrade(studentScore);

    // Compare student's score to class average
    if (studentScore >= average) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}
// Create getAverage function
function getAverage(testScore) {
    let totalScore = 0;
    for (let score of testScore) {
        totalScore += score;
    }
    return totalScore / testScore.length;
}

// Create getGrade function
function getGrade(studentScore) {
    if (studentScore === 100) {
        return "A+";
    } else if (studentScore >= 90 && studentScore <= 99) {
        return "A";
    } else if (studentScore >= 80 && studentScore <= 89) {
        return "B";
    } else if (studentScore >= 70 && studentScore <= 79) {
        return "C";
    } else if (studentScore >= 60 && studentScore <= 69) {
        return "D";
    } else if (studentScore >= 0 && studentScore <= 59) {
        return "F";
    }
}

// Create hasPassingGrade function
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

// Create studentMsg function
function studentMsg(arrayOfScores, stuScore) {
    const avg = getAverage(arrayOfScores).toFixed(2);
    const grade = getGrade(stuScore);

    if (hasPassingGrade(stuScore)) {
        return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
    }
}

// Example usage
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 90));
// console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) );

