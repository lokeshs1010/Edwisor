var userToFind = window.prompt("Enter the name of user to find");
var noOfUsers = ["Lokesh", "Anuj", "Swapnil", "Piyush", "Naveen"];

for (var i=0; i<=noOfUsers.length; i++) {
    if (noOfUsers[i] == userToFind) {
    alert("User found at position :" + (Number(i) +1))  
    break;
    }
    else {
        alert("Enter correct user")
        break;
    }
}