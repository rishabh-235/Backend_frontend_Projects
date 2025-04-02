Array.prototype.includesOneOf = function(arr){
    if(arr.length==0)
    {
        console.log(false)
        return;
    }

    if(typeof(arr[0])==='number' || typeof(arr[0])==='string')
    {
        for(let i=0; i<arr.length; i++)
        {
            for(let j=0; j<this.length; j++)
            {
                if(arr[i]===this[j])
                    {
                        console.log(true);
                        return;
                    }
            }
        }
    }
    else if(typeof(arr[0])==='object')
    {
        for(let i=0; i<arr.length; i++)
        {
            for(let j=0; j<this.length; j++)
            {
                if(JSON.stringify(arr[i]) === JSON.stringify(this[j]))
                    {
                        console.log(true)
                        return;
                    }
            }
        }
    }

    console.log(false)
    return;
    
}

const arr=[1, 2, 3, 4, 5, 6] 
arr. includesOneOf([2, 8, 10]) 
// ==>true 
arr. includesOneOf([10, 11, 12])
// =>false 
arr. includesOneOf([])
// => Always false 

const arr2 = [{name:"James Bond",code:"OO7"},{name:"Edward Donne",code:"OO1"}] 
arr2.includesOneOf([{name:"James Bond",code:'OO7'}]) 
// ===> true 
arr2.includesOneOf([{name:"James Bond",code:'OO7',organization: 'MI6'}])
//  ===> false 

const arr3 =[[1,22,33,4],[4,55,6,772]]; 
arr3.includesOneOf([[1,22,33,4]]) 
// ===> true 
arr3.includesOneOf([[1,33,22,4]]) 
// ===> false
