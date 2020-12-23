function timeConversion(s) {
    /*
     * Write your code here.
     */
    let formatHour = s.slice(s.length - 2);
    let hh = parseInt(s.split(':')[0]);
    let mm = s.split(':')[1];
    let ss = s.split(':')[2].slice(0,2);
    
    if(formatHour == 'PM' && hh > 0 && hh <= 11){
        hh = hh + 12;
    }else if(formatHour == 'PM' && hh == 12){
        hh = '12';
        
    }else if(formatHour == 'AM' && hh == 12){
        hh = '0';
    }
    if(hh<10 ){
        hh = '0' + hh;
    }
    return `${hh}:${mm}:${ss}`;
}