function miniMaxSum(arr) {
    let max = arr.reduce((a,b)=> a+b);
    let min = arr.reduce((a,b)=> a+b);
    max -= Math.min(...arr);
    min -= Math.max(...arr);
    console.log(min + " " + max); 

}