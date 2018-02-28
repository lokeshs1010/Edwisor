var marksObtained = window.prompt('Enter the marks you got');

if (marksObtained == undefined || marksObtained == null || marksObtained == '') {
    alert('Please enter valid input');
} else if (marksObtained < 0 || marksObtained > 100) {
    alert('Please enter the marks between 0 to 100');
} else {
    var totalMarks = 100;
    marksObtained = Number(marksObtained);
    if (marksObtained > 85) {
        alert('You are passed with distinction');
    } else {
        alert('You are passed only');
    }
}