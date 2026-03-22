// function checkEvenOdd(a){

    // first way
    // if (a % 2 === 0) {
    //     console.log("Number is even");
    // }else{
    //     console.log("Number is odd");
    // }

    // console.log("-------------------------------------");
    // second way
    // const remainder = a % 2;

    // if(remainder === 0){
    //     return "number is Even"
    // }else{
    //     return "number is Odd"
    // }
    
    // console.log("-------------------------------------");
    // third way
    // return a%2 == 0 ? "even" : "odd";


    // console.log("-------------------------------------");
    // forth way
    // answer come in true and false
    // return a %2 == 0;   

// };

    // console.log("-------------------------------------");
    // forth way
    // answer come in true and false
    // const checkEvenOddNumber = (num) => {
    //     if (num % 2 === 0){
    //         return "Even value";
    //     } else{
    //         return "Odd value";
    //     }
    // }

    // sixth way 
    // short arrow function
    const checkEvenOddNumber = (num) => num % 2 == 0 ? "even" : "odd";
    
    
    // fifth and sixth
    console.log(checkEvenOddNumber(2));



  // first 
// checkEvenOdd(2);    

// second, third, forth 
// console.log(checkEvenOdd(2));
// console.log(checkEvenOdd(13));
// console.log(checkEvenOdd(-2));
// console.log(checkEvenOdd(0));
// console.log(checkEvenOdd(-0));
// console.log(checkEvenOdd(-1));
// console.log(checkEvenOdd(1));