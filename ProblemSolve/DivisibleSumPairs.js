function divisibleSumPairs(n, k, ar) {
    let count = 0;
    let result;
    for(let i = 0; i < n ; i++){
        for (let j = i+1; j < n ; j++){
            result = (ar[i] + ar[j]) % k;
            if(result === 0){
                count++;
            }
        }
    }
    return count;

}