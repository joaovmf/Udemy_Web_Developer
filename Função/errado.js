function sub (){ 
    let result = 0;
    for(let i in arguments){
        result = result - arguments[i]; 
     }
    console.log(result);
    return result;
 }

 sub (5,5)

 function div (){ 
    let result = 1;
    for(let i in arguments){
        result = result / arguments[i]; 
     }
    console.log(result);
    return result;
 }

 div (25,5)