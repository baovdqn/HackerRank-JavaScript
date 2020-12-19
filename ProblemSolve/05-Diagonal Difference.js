/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let length = arr.length;
    let result = 0;
    let diagonalLeft = 0, diagonalRight = 0;
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j < length; j++){
            if(i===j){
                diagonalLeft = diagonalLeft + arr[i][j]
            }
            if(i+j === length - 1){ 
              diagonalRight = diagonalRight + arr[i][j]
            }
    }
}
console.log(arr)
return Math.abs(diagonalLeft - diagonalRight);
}