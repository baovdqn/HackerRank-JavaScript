function plusMinus(arr) {
    let countPos = 0;
    let countNega = 0;
    let countZero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            countNega++;
        }else if(arr[i] == 0){
            countZero++;
        }else{
            countPos++;
        }
    }
    console.log(countPos/arr.length);
    console.log(countNega/arr.length);
    console.log(countZero/arr.length);

}