function pyramid(sign, n, userChoose) {
    if (userChoose == false) {
        // number of rows
        for (let i = 1; i <= n; i++) {
            let row = "";

            // add spaces
            for (let j = n - i; j > 0; j--) {
                row += " ";
            }

            // add signs
            for (let k = 1; k <= i; k+=2) {
                row += `${sign} `;
            }

            console.log(row);
        }
    }
}

pyramid("*", 8, false);

