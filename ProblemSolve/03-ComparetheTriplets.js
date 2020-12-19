// Complete the compareTriplets function below.
function compareTriplets(a, b) {

    var result = [0, 0];

    for (var i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            result[1]++;
        } else if (a[i] > b[i]) {
            result[0]++;
        }
    }

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}