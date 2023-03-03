"use strict";
{
    let placesToVisit = ["Makka", "Madina", "Bali", "Waterfall", "Paris"];
    console.log("Original order:");
    console.log(placesToVisit);
    console.log("Alphabetical order:");
    console.log([...placesToVisit].sort());
    console.log("Original order after sorting:");
    console.log(placesToVisit);
    console.log("Reverse alphabetical order:");
    console.log([...placesToVisit].sort().reverse());
    console.log("Original order after reverse sorting:");
    console.log(placesToVisit);
    placesToVisit.reverse();
    console.log("Reversed order:");
    console.log(placesToVisit);
    placesToVisit.reverse();
    console.log("Original order after reversing:");
    console.log(placesToVisit);
    placesToVisit.sort();
    console.log("Alphabetical order after sorting:");
    console.log(placesToVisit);
    placesToVisit.sort().reverse();
    console.log("Reverse alphabetical order after sorting:");
    console.log(placesToVisit);
}
