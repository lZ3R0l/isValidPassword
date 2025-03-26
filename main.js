function isValidPassword(password, username) {
    if (password.length < 8 || password.includes(' ') || password.includes(username)) {
        return false;
    }
    else {
        return true;
    }
}

console.log('Welcome to the password validator tool!');
console.log('Please register your username and password: ');
user = prompt('Register your username: ');
pass = prompt('Register your password: ');

lowerUser = user.toLowerCase();

console.log(isValidPassword(pass, lowerUser));