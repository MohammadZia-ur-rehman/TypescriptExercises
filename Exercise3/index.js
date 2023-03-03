"use strict";
/*
Program Name: String Manipulation
Written By: Muhammad Zia Ur Rehman
Date: 03-March-2023
Description: The following program is used to convert the string in UPPERCASE, lowercase & Titlecase.
*/
let userName = "muhammad zIA Ur rehMAN";
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
// toTitleCase function to convert the string in titlecase and return it (using the loop)
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
// toTitleCase function to convert the string in titlecase and return it (using replace function & regular expression)
function toTitleCase1(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(userName));
