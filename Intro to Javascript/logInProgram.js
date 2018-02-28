var user = [
    {
        'email' : 'lokesh@gmail.com',
        'password' : 'lokesh',
        'name' : 'lokesh',
        'lastname' : 'saini',
        'isVerified' : true,
        'isPaid' : true
    },
    {
        'email' : 'anu@gmail.com',
        'password' : 'anu',
        'name' : 'anuj',
        'lastname' : 'sharma',
        'isVerified' : false,
        'isPaid' : true
    },
    {
        'email' : 'naveen@gmail.com',
        'password' : 'naveen',
        'name' : 'naveen',
        'lastname' : 'rao',
        'isVerified' : true,
        'isPaid' : false
    }
];

var logInUser = function (email, password, allUsers) {
    var isUserCorrect = false;
    var isPasswordCorrect = false;
    
    for (var currentUser in allUsers) {
        if ( allUsers[currentUser]['email'] == email) {
            if ( allUsers[currentUser]['password'] == password) {
                isUserCorrect = true;
                isPasswordCorrect = true;
                break;
            }
            else {
                isUserCorrect = true;
                break;
            }
        }
        else {
            isUserCorrect = false;
        }
    }
    if (isUserCorrect == true && isPasswordCorrect == true) {
        alert('You are logged in');
    }
    else if (isUserCorrect == true && isPasswordCorrect == false) {
        alert('Incorrect Password');
    }
    else {
        alert('Invalid user');
    }
}

var email = prompt('Enter the Email');
var password = prompt('Enter the password');

logInUser(email, password, user);
