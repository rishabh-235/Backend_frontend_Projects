class OutOfRangeError  extends Error {
    constructor(message){
        super(message);
        this.name = "OutOfRangeError";
    }
}

class InvalidExprError extends Error {
    constructor(message){
        super(message);
        this.name = "InvalidExprError";
    }
}

function evalString(){
    let string = document.getElementById("input1").value;

    try {
        for(let a of string){
            if((a>='0' && a<='9') || a==='+' || a==='-' || a==='*' || a==='/')
            {
                continue;
            }
            else
            {
                throw new OutOfRangeError("Expression should only consist of integers and +-/* characters and not < arg >!");
            }
        }
    
        let operator = false;
        for(let a of string)
        {
            if((operator == true) && (a==='+' || a==='-' || a==='*' || a==='/')){
                throw new InvalidExprError("Expression should not have an invalid combination of expression");
            }
            else{
                if(a==='+' || a==='-' || a==='*' || a==='/')operator = true;
            }
        }
    
        let startchar = string.charAt(0);
        let endchar = string.charAt(string.length-1);
    
        if(startchar==='+' || startchar==='-' || startchar==='*' || startchar==='/')
        {
            throw new InvalidExprError("Expression should not start with invalid operator");
        }
        else if(endchar==='+' || endchar==='-' || endchar==='*' || endchar==='/')
        {
            throw new InvalidExprError("Expression should not end with invalid operator");
        }
    } catch (error) {
        alert(error.name+" : "+error.message);
    }
}

