const recursiveCountdown = (number) => {
    if(number < 1){
        return;
    }
    console.log(number)
    recursiveCountdown(number - 1 );

};
recursiveCountdown(5) 
//5 4 3 2 1

const recursiveCountdown2 = (number) => {
    if(number < 1){
        return;
    }
    recursiveCountdown2(number - 1 );
    console.log(number)
};
recursiveCountdown2(5) 
//1 2 3 4 5 
