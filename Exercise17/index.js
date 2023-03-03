"use strict";
const guestsList2 = ['Yaseen', 'Ahsan', 'Rehman'];
console.log(`Dear ${guestsList2[0]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList2[1]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList2[2]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`\n${guestsList2[1]},Won\'t be able to attend the dinner. So, adding a different guest!\n`);
guestsList2.splice(1, 1, 'Zia');
console.log(`Dear ${guestsList2[0]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList2[1]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList2[2]},You are cordially invited to dinner at my home on Saturday!`);
console.log("\nGood news! A bigger dinner table has been found!\n");
guestsList2.unshift("fahad");
guestsList2.splice(Math.floor(guestsList2.length / 2), 0, "hamid");
guestsList2.push("hasnat");
for (let guest of guestsList2)
    console.log(`Dear ${guest}, please join me for dinner.`);
console.log("\nSorry, the new dinner table won't arrive in time. I can only invite two people for dinner.\n");
while (guestsList2.length > 2)
    console.log(`Sorry ${guestsList2.pop()}, I can't invite you to dinner.`);
for (let guest of guestsList2)
    console.log(`Dear ${guest}, you're still invited to dinner.`);
guestsList2.pop();
guestsList2.pop();
console.log("List of guests at the end:", guestsList2);
