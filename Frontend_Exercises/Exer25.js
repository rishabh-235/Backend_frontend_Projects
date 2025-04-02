function counter() {
    let number = 0;
    
    function incrementCounter(){
        number++;
        console.log(number);
    }
    
    return incrementCounter;
}



const incrementCounter = counter();

incrementCounter();

incrementCounter();