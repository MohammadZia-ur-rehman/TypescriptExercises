"use strict";
let userName = "muhammad zIA Ur rehMAN";
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
function toTitleCase(str) {
    let newStr = "";
    let flag = true;
    for (let i = 0; i < str.length; i++) {
        if (flag) {
            newStr += str[i].toUpperCase();
            flag = false;
        }
        else {
            newStr += str[i].toLowerCase();
        }
        if (str[i] == ' ')
            flag = true;
    }
    return newStr;
}
function toTitleCase1(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(userName));
