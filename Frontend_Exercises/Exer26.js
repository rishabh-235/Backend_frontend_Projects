//Hoisting is a phenomenon in javascript in which the declaration fo variables move to the top of the programe.
//e.g. 
console.log(number); // give undifine as declartion will hoisted but defination can't hoisted.
var number = 10;

//Examle of Higher Order Function taking a funcition as an argument
function higherOrder(firstCitizen){
    firstCitizen();
}

higherOrder(()=>{
    console.log("Hii From firstCitizen Function");
})

//Example of closure
function closureFunction(){
    const message = "Hi i am a veriable of clousre funciton";
    
    function innerFunction(){
        console.log(message);
    }
    
    return innerFunction;
}

const innerFunction = closureFunction();
innerFunction();