"use strict";
{
    const animals = ["dog", "cat", "rabbit"];
    for (let animal of animals) {
        console.log(animal);
    }
    for (let i = 0; i < animals.length; i++) {
        console.log(`A ${animals[i]} would make a great pet.`);
    }
    console.log("Any of these animals would make a great pet!");
}
