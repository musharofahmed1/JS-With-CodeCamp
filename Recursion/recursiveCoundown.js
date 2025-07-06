const recursiveCountdown = (number) => {
    console.log(`Function execution started for number: ${number}`);
    if (number < 1) {
        console.log(`Base case reached, begin resolving stack`);
        return;
    }
    console.log(`Calling recursiveCountdown with number: ${number - 1}`);
    recursiveCountdown(number - 1);
    console.log(`Function execution completed for number: ${number}`);
  };

recursiveCountdown(5);