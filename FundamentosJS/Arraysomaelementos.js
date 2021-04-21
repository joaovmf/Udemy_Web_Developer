

function sum (arr) {
    if (arr instanceof Array ) {
        var val = 0 
        for (var i = 0; i < arr.length ; i++){
            val += arr[i]
        }
        return val 
    }
}

var vetor = [10,20,30,40,50,70]

console.log (sum (vetor))