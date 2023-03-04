{
    function MakeShirt(size:string = "large", text:string = "I love Typescript") : void{
        console.log(`The size of shirt iss \"${size}\" & \"${text}\" should be printed on it.`);
    }
    MakeShirt();
    MakeShirt("medium");
    MakeShirt("small","I love coding");
    
}