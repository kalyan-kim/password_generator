
const passwordBox = document.getElementById("password");
const length = 16;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const Symbol = "!@#$%^&*()_+{}:'?|><=-";
const allchars = uppercase + lowercase + number + Symbol;
function CreatePassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += Symbol[Math.floor(Math.random() * Symbol.length)];

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = password;
}
