function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = Math.max(...candles);
    let count = 0;
    for (let i = 0 ; i < candles.length; i++){
        if(candles[i] == tallest){
            count += 1;
        }
    }
    return count;
}