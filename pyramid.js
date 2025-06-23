function pyramid(sign, n, userChoose) {
    let result = "\n";

    if (userChoose == false) {
        // Vertex up
        for (let i = 0; i < n; i++) {
            let spaces = " ".repeat(n - i - 1);
            let signs = sign.repeat(1 + 2 * i);
            result += spaces + signs + "\n";
        }
    } else {
        // Vertex down
        for (let i = n - 1; i >= 0; i--) {
            let spaces = " ".repeat(n - i - 1);
            let signs = sign.repeat(1 + 2 * i);
            result += spaces + signs + "\n";
        }
    }

    return result;
}

// Example call:
console.log(pyramid("o", 4, false));
 