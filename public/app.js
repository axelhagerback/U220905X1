function showName() {
    var firstName = document.getElementById("firstNameTextarea").value;
    var lastName = document.getElementById("lastNameTextarea").value;
    document.getElementById("name").innerHTML = "Hej, " + firstName + " " + lastName;
    
};