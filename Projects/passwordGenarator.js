function generatePassword(lengthOfPassword){
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

    for(let x in char){
        return Math.random(x)
    }
}

let password = console.log(`Generated password: ${generatePassword(8)}`);