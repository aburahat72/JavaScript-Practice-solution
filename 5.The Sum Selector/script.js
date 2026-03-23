let arr = [1, 2, 3, -1, 4, 5];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
        sum += arr[i];
    } else if(arr[i] < 0){
        break;
    }
}
console.log(sum);