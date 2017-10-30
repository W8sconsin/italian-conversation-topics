function validateForm() {
    var fname = document.forms["contactform"]["firstname"].value;
    if (fname== "") {
        alert("First name must be filled out");
        return false;
    }
    var lname = document.forms["contactform"]["lastname"].value;
    if (lname== "") {
        alert("Last name must be filled out");
        return false;
    }
    var email = document.forms["contactform"]["email"].value;
    if (email== "") {
        alert("Email must be filled out");
        return false;
    }
    var phone = document.forms["contactform"]["phone"].value;
    if (phone== "") {
        alert("Phone number must be filled out");
        return false;
    }
}