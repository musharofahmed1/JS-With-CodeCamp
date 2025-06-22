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
        return "F"
    }
    else{
        return getGrade(score);
    }
}

console.log(hasPassingGrade(66));