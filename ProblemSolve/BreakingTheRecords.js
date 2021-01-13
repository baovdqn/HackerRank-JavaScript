function breakingRecords(scores) {
    let countMin = 0, countMax = 0;
    let hightscore = scores[0], lowscore = scores[0];
    for (let i = 1 ; i < scores.length ; i++ ){
        if(scores[i] > lowscore){
            lowscore = scores[i];
            countMin++;
        }else if(scores[i] < hightscore){
            hightscore = scores[i];
            countMax++; 
        }
    }
    let result = [countMin, countMax]
    return result;

}