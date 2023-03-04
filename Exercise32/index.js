"use strict";
{
    let current_users = ['john', 'jane', 'smith', 'mike', 'lisa'];
    let new_users = ['emily', 'jake', 'lisa', 'mike', 'peter'];
    for (let user of new_users) {
        if (current_users.some(current_user => current_user.toLowerCase() === user.toLowerCase())) {
            console.log(`Sorry, the username "${user}" is already taken. Please enter a new username.`);
        }
        else {
            current_users.push(user);
            console.log(`Congratulations! The username "${user}" is available.`);
        }
    }
}
