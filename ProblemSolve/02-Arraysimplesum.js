/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */

    var sum = 0;
    for (var element of ar) {
        sum = sum + element;
    }

    return sum;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);

    ws.write(result + "\n");

    ws.end();
}
