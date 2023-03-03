const guestsList: string[] = ['Yaseen', 'Ahsan', 'Rehman'];

console.log(`Dear ${guestsList[0]},You are cordially invited to dinner at my home on Saturday!\n`);

console.log(`Dear ${guestsList[1]},You are cordially invited to dinner at my home on Saturday!\n`);

console.log(`Dear ${guestsList[2]},You are cordially invited to dinner at my home on Saturday!\n`);

console.log(`${guestsList[1]},Can\'t be able to attend the dinner. So, adding a different guest!\n`);


guestsList.splice(1,1, 'Zia');

console.log(`Dear ${guestsList[0]},You are cordially invited to dinner at my home on Saturday!\n`);

console.log(`Dear ${guestsList[1]},You are cordially invited to dinner at my home on Saturday!\n`);

console.log(`Dear ${guestsList[2]},You are cordially invited to dinner at my home on Saturday!\n`);

