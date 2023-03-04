"use strict";
{
    const usernames = ['john', 'mary', 'admin', 'david', 'jane'];
    const counter = usernames.length;
    for (let i = 0; i < counter; i++) {
        usernames.shift();
    }
    if (usernames.length > 0) {
        for (let i = 0; i < usernames.length; i++) {
            if (usernames[i] === 'admin') {
                console.log('Hello admin, would you like to see a status report?');
            }
            else {
                console.log(`Hello ${usernames[i]}, thank you for logging in`);
            }
        }
    }
    else {
        console.log('We need to find some users!');
    }
}
