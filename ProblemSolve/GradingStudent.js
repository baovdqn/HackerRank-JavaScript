function gradingStudents(grades) {
    // Write your code here
    for(var i = 0; i < grades.length ; i++){
        if(grades[i] >= 38 && (grades[i] % 5) > 2){
            grades[i] = grades[i] + (5 - (grades[i] % 5));
        }
    }
    return grades;
}

gradingStudents([73,67,38,33])