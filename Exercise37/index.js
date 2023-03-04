"use strict";
{
    function MakeShirt(size = "large", text = "I love Typescript") {
        console.log(`The size of shirt iss \"${size}\" & \"${text}\" should be printed on it.`);
    }
    MakeShirt();
    MakeShirt("medium");
    MakeShirt("small", "I love coding");
}
