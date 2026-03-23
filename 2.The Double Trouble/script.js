let a = [2,4,8,9,10];
let result = [];
for(let i = 0; i < a.length; i++){
    if(a[i] === a[i+1]){
        result.push(a[i] * 2);
        i++;

    } else {
        result.push(a[i] * 2);
    }
    
}
console.log(result);