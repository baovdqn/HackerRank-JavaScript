function staircase(n) {
    for(let i = 0; i<n; i++){
        let string='';
        for(let j = i; j<n-1 ; j++){
            string += ' ';
        }
        for (let j = 0; j<=i; j++){
            string += '#';
        }
        console.log(string)
    }


}