var generateEmail = function (name, message) {
    var emailMessage = 'Hi ' + name + '\n' + "There is a message for you from our team" + '\n' + message + '\n' + 'The Team';
    return emailMessage;
};

var showEmail = generateEmail('Lokesh', 'Welcome to the team.');
alert(showEmail);