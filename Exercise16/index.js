"use strict";
const guestsList1 = ['Yaseen', 'Ahsan', 'Rehman'];
console.log(`Dear ${guestsList1[0]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList1[1]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList1[2]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`\n${guestsList1[1]},Won\'t be able to attend the dinner. So, adding a different guest!\n`);
guestsList1.splice(1, 1, 'Zia');
console.log(`Dear ${guestsList1[0]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList1[1]},You are cordially invited to dinner at my home on Saturday!`);
console.log(`Dear ${guestsList1[2]},You are cordially invited to dinner at my home on Saturday!`);
console.log("\nGood news! A bigger dinner table has been found!\n");
guestsList1.unshift("fahad");
guestsList1.splice(Math.floor(guestsList1.length / 2), 0, "hamid");
guestsList1.push("hasnat");
for (let guest of guestsList1) {
    console.log(`Dear ${guest}, please join me for dinner.`);
}
