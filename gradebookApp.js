function getAverage(testScore){
    let totalScore = 0;
    for(let score of testScore){
        totalScore += score;
    }
    return totalScore / testScore.length;
}

console.log(getAverage([56,76,54,77,90]));