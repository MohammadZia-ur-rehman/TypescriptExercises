{
    let str1 = "hello";
    let str2 = "HELLO";
    console.log("Are str1 and str2 equal? I predict false.");
    console.log(str1 == str2);

    let str3 = "javascript";
    let str4 = "JavaScript";
    console.log("Are str3 and str4 equal ignoring case? I predict true.");
    console.log(str3.toLowerCase() == str4.toLowerCase());

    let str5 = "cat";
    let str6 = "dog";
    console.log("Is str5 not equal to str6? I predict true.");
    console.log(str5 != str6);

    let num1 = 10;
    let num2 = 5;
    console.log("Is num1 greater than num2? I predict true.");
    console.log(num1 > num2);

    let num3 = 3;
    let num4 = 3;
    console.log("Are num3 and num4 equal? I predict true.");
    console.log(num3 == num4);

    let num5 = 7;
    let num6 = 9;
    console.log("Is num5 less than num6? I predict true.");
    console.log(num5 < num6);

    let num7 = 6;
    let num8 = 8;
    console.log("Is num7 less than or equal to num8? I predict true.");
    console.log(num7 <= num8);

    let num9 = 4;
    let num10 = 2;
    console.log("Is num9 greater than or equal to num10? I predict true.");
    console.log(num9 >= num10);

    let num11 = 10;
    let num12 = 15;
    console.log("Is num11 not equal to num12? I predict true.");
    console.log(num11 != num12);

    let num13 = 10;
    let num14 = 20;

    console.log("Is num13 greater than 5 and num14 less than 30? I predict True.");
    console.log(num13 > 5 && num14 < 30);

    console.log("Is num13 greater than 15 or num14 less than 15? I predict False.");
    console.log(num13 > 15 || num14 < 15);

    console.log("Is num13 greater than 15 and num14 less than 15? I predict False.");
    console.log(num13 > 15 && num14 < 15);

    let fruits = ['apple', 'banana', 'orange', 'mango'];

    console.log("Is 'banana' in the fruits array? I predict True.");
    console.log(fruits.includes('banana'));

    console.log("Is 'grapes' in the fruits array? I predict False.");
    console.log(fruits.includes('grapes'));

    console.log("Is 'grapes' not in the fruits array? I predict True.");
    console.log(!fruits.includes('grapes'));

    console.log("Is 'orange' not in the fruits array? I predict False.");
    console.log(!fruits.includes('orange'));
}