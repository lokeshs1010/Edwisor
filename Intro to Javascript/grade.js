var grade = window.prompt('Enter the grade you got');

alert(grade);

switch (grade) {
    case 'A':
        alert('Excellent');
        break
    case 'B':
        alert('Good');
        break
    case 'C':
        alert('Average');
        break
    case 'D':
        alert('Fail');
        break
    default:
        alert('Please enter valid input')
}