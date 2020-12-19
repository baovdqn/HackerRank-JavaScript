function main() {
    const n = parseInt(readLine(), 10);
    
    for (let i = 1; i < 11; i++){
        let result = n * i;
        console.log(n + ' x ' + i + ' = ' + result)
    }
}