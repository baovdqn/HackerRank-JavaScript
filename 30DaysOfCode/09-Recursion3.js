function factorial(n) {
    if(n<=0){
        return 1;
    }else {
        console.log(n);
        return n * factorial(n-1);
    }
}

factorial(3);