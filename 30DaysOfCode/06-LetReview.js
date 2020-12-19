function processData(input) {
    //Enter your code here
    var arrInp = input.split('\n');
    var T = arrInp.shift();
    for (var i = 0; i < T; i++) {
        var inp1 = '';
        var inp2 = '';
        var S = arrInp[i];
        var arrS = S.split('');
        var lenghArr = arrS.length;
        for (var j = 0; j < lenghArr; j++) {
            if (j % 2 === 0) {
                inp1 += arrS[j];
            } else {
                inp2 += arrS[j]
            }
        }
        console.log(inp1 + ' ' + inp2)
    }
}