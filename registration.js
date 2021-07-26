// JavaScript to validate registration form data
// form and section status
var formValid = true;
var personalInfoValid = true;
var accountInfoValid = true;
var buttonsValid = true;
var invColor = "LightPink";
var focusCount = 0;
var savedData = "";
var registrationCookies = [];
var queryArray = [];
// error message storage
var errorMsg = document.getElementsByClassName("errorMsgSpace");
// create event listeners
function createEventListeners() {
    // variable to store HTML element location
    var submitButton = document.getElementsByTagName("form");
    // check for event
    if (submitButton[0].addEventListener) {
        submitButton[0].addEventListener("submit", stopSubmit, false);
    } else if (submitButton[0].attachEvent) {
        submitButton[0].attachEvent("onsubmit", stopSubmit);}
    }
// function to validate registration form
function stopSubmit(evt) {
    // stop sumbit event
    if (evt.preventDefault) {
       evt.preventDefault();    
    } else if (typeof evt.returnValue === "undefined") {
       return false; }
    validateForm();}
// run validation functions on form sections
function validateForm() {
    // reset form validation for revalidation
    formValid = true;
    validateAccountInfo(); 
    validatePersonalInfo();
    validateButtons();
    finalCheck();}
// check personal info
function validatePersonalInfo() {
    // set variables to hold element values, comparison values and element status
    var firstNameElement = document.getElementsByName("firstName");
    var lastNameElement = document.getElementsByName("lastName");
    var telElement = document.getElementsByName("telNumber");
    var emailElement = document.getElementsByName("email");
    var firstValid = true;
    var lastValid = true;
    var telValid = true;
    var emailValid = true;
    // check the following
    try {
        // reset personal information field backgrounds
        firstNameElement[0].style.background = "";
        lastNameElement[0].style.background = "";
        emailElement[0].style.background = "";
        telElement[0].style.background = "";
        // check personal info fields for blank fields
        if (firstNameElement[0].value === "" || lastNameElement[0].value === "" || emailElement.value === "" || telElement.value === "") {
            personalInfoValid = false;
            throw "Please complete personal information fields (First, Last Name, Email and Phone Number).";
        }
        // check first name field (letters only)
        if (!firstNameElement[0].value.match(/^[a-zA-Z]+$/)) {
            // invalidate personal info
            personalInfoValid = false;
            // invalidate first name field 
            firstValid = false; 
            // error message
            throw "Please enter first name using letters only.";}
        // check last name field (letters only)
        if (!lastNameElement[0].value.match(/^[a-zA-Z]+$/)) {
            // invalidate personal info
            personalInfoValid = false;
            // invalidate last name field
            lastValid = false; 
            // error message
            throw "Please enter last name using only letters."; }
        // check email field and format
        if (!emailElement[0].value.match(/\S+@\S+\.\S+/)) {
            // invalidate personal info
            personalInfoValid = false;
            // invalidate email field
            emailValid = false;
            throw "Please enter email in correct format (xxx@xxx.xxx)"; } 
        // check phone number field and format
        if (!telElement[0].value.match(/[(\d{3})]+[\-]+[(\d{3})]+[\-]+[(\d{4})]/)) {
            // invalidate personal info
            personalInfoValid = false;
            // invalidate phone number field
            telValid = false;
            // inform user of phone number format issue
            throw "Please enter phone number in (###)-###-#### format."; 
        } else {
            // error message section blank if no issues
            errorMsg[0].style.display = "none";
            errorMsg[0].text = "";}
    // catch thrown messages and run additional checks
    } catch (msg) {
        // process if personal info is not valid
        if (personalInfoValid === false) {
            // change background color of first name text field
            if (firstValid === false || firstNameElement[0].value === "") {
                firstNameElement[0].style.background = invColor;
                focusCount += 1;
                if (focusCount === 1) {
                    firstNameElement[0].focus();
                    }
            }
            // change background color of last name text field
            if (lastValid === false || lastNameElement[0].value === "") {
                lastNameElement[0].style.background = invColor;
                focusCount += 1;
                if (focusCount === 1) {
                    lastNameElement[0].focus();
                    }
            }
            // change background color of email field
            if (emailValid === false || emailElement[0].value === "") {
                emailElement[0].style.background = invColor; 
                focusCount += 1;
                if (focusCount === 1) {
                    emailElement[0].focus();
                    }
            }
            // change background color of phone number field
            if (telValid === false || telElement[0].value === "") {
                telElement[0].style.background = invColor;
                focusCount += 1;
                if (focusCount === 1) {
                    telElement[0].focus();
                    }
            }
        // display error message
        errorMsg[0].style.display = "block";
        errorMsg[0].innerHTML = msg;}
    }
}
// check newsletter subscription choice
function validateButtons() {
    // store button collection
    var buttons = document.getElementsByName("signUpNewsletter");
    // check if a button is checked
    if (!buttons[0].checked && !buttons[1].checked) {
        // loop through collection of buttons if not checked
        for (var i=0; i < 2; i++) {
            // highlight buttons
            buttons[i].style.outline = "1px solid red"; }
        // invalidate buttons status
        buttonsValid = false;}
    try {
        // process if button input is invalid
        if (buttonsValid === false) {
            // error message
            throw "Please select a Newsletter option.";
            } else {
                // error message section blank
               errorMsg[1].style.display = "none";
               errorMsg[1].innerHTML = "";}
        } catch (msg) {
            // display error message
            errorMsg[1].style.display = "block";
            errorMsg[1].innerHTML = msg;}
}
// check if username and password are correct
function validateAccountInfo() {
    // set storage for element data
    var userNameElement = document.getElementsByName("userName");
    var pass1Element = document.getElementsByName("pass1");
    var pass2Element = document.getElementsByName("pass2");
    // password match status
    var passMismatch = false;
    // color setting for text area background
    try {
        // reset account info field background
        userNameElement[0].style.background = "";
        pass1Element[0].style.background = "";
        pass2Element[0].style.background = "";
        // clear previous error messages
        errorMsg[2].style.display = "none";
        errorMsg[2].innerHTML = "";
        // check for blank account info fields
        if (userNameElement[0].value === "" || pass1Element[0].value === "" || pass2Element[0].value === "") {
            accountInfoValid = false;
            // error message
            throw "Please complete username and password fields." }
        // check if password length is correct
        if (userNameElement[0].value !== "" && pass1Element[0].value !== "" && pass2Element[0].value !== "") {
            if (!pass1Element[0].value.match(/[a-zA-Z0-9!@#$%&*]{8,}/)) {
                // invalidate account info
                accountInfoValid = false;
                // clear password inputs
                pass1Element[0].value = "";
                pass2Element[0].value = "";
                focusCount += 1;
                if (focusCount === 1) {
                    pass1Element[0].focus();
                    }
            // error message
            throw "Password length too short.  Please enter new password." }
            // check if password entries match
            if (pass1Element[0].value !== pass2Element[0].value) {
                // password mismatch status
                passMismatch = true;
                // invalidate account info
                accountInfoValid = false;
                // clear password inputs
                pass1Element[0].value = "";
                pass2Element[0].value = "";
                focusCount += 1;
                if (focusCount === 1) {
                    pass2Element[0].focus();
                    }
                // error message
                throw "Passwords entered do not match.  Please re-enter passwords."; }
        } else {
                // error message section blank
               errorMsg[2].style.display = "none";
               errorMsg[2].innerHTML = "";}
        } catch (msg) {
        // do if password mismatch
        if (passMismatch) {
            userNameElement[0].style.background = "";
            // highlight password fields
            pass1Element[0].style.background = invColor;
            pass2Element[0].style.background = invColor;} 
        // highlight blank fields    
        if (accountInfoValid === false) {
            // highlight user name text area if blank
            if (userNameElement[0].value === "") {
                userNameElement[0].style.background = invColor; 
                focusCount += 1;
                if (focusCount === 1) {
                    userNameElement[0].focus();
                    }
            }
            // highlist password text area if blank
            if (pass1Element[0].value === "") {
                pass1Element[0].style.background = invColor; 
                focusCount += 1;
                if (focusCount === 1) {
                    pass1Element[0].focus();
                    }
            }
            // highlist password verify text area if blank
            if (pass2Element[0].value === "") {
                pass2Element[0].style.background = invColor; 
                focusCount += 1;
                if (focusCount === 1) {
                    pass2Element[0].focus();
                    }
            }
        }
        // display error message
        errorMsg[2].style.display = "block";
        errorMsg[2].innerHTML = msg;}
}
// final check of form
function finalCheck() {
    if (personalInfoValid === false || buttonsValid === false || accountInfoValid === false) {
        // invalidate form
        formValid = false;
        // reset sections for revalidation
        personalInfoValid = true;
        buttonsValid = true;
        accountInfoValid = true;
        focusCount = 0;
    } else if (formValid = true) {
        // gather input values and create cookies
        saveData();
        // set cookie data
        setCookies();
        // display submit confirmation window
        confirm("Form has been submitted successfully!");
        // reset form
        document.forms.form.reset();
        // open confirm page with query string added to url
        window.location.href = savedData
    }
}
// save input data to variable to attach to url
function saveData() {
    // set query string to add to url for confirm page
    savedData = "confirm.html";
    savedData += "?username=" + document.getElementById("userName").value;
    savedData += "&password=" + document.getElementById("password").value;
    savedData += "&verifiedpassword=" + document.getElementById("passwordVerify").value;
    savedData += "&firstname=" + document.getElementById("firstName").value;
    savedData += "&lastname=" + document.getElementById("lastName").value;
    savedData += "&email=" + document.getElementById("email").value;
    savedData += "&phonenumber=" + document.getElementById("phoneNumber").value;
    savedData += "&signupnewsletter=" + document.getElementById("signUpNewsletter").value;
}
// function to create cookies
function setCookies() {
    // set cookie for each field value
    document.cookie = "username=" + document.getElementById("userName").value;
    document.cookie = "password=" + document.getElementById("password").value;
    document.cookie = "verifiedPassword=" + document.getElementById("passwordVerify").value;
    document.cookie = "firstname=" + document.getElementById("firstName").value;
    document.cookie = "lastname=" + document.getElementById("lastName").value;
    document.cookie = "email=" + document.getElementById("email").value;
    document.cookie = "phonenumber=" + document.getElementById("phoneNumber").value;
    document.cookie = "newsletter=" + document.getElementById("signUpNewsletter").value;
}

// function to display query string data
function display() {
    // validate presence of query string
    if (location.search) {
        // variable to store query string from url
        var queryData = location.search;
        // display query string as it appears in url
        document.getElementById("display1").innerHTML = queryData;
        // arrays and variable to store query string data
        var key=[];
        var value=[];
        var string1 = queryData.split("?")[1].split("&");
        // loop to set array values
        for (var initialVar of string1) {
            var str = initialVar.split("=") 
            key.push(str[0]);
            value.push(str[1]);
        }
        var counter = key.length;
        var displayString = "";
        // loop to display query data on individual lines
        for (var initialVar=0; initialVar < counter; initialVar++) {
            displayString += key[initialVar]+':'+value[initialVar]+'<br/>';
        }
        // display data 
        document.getElementById("display2").innerHTML=displayString;
    }
}
// function to read cookie data and display
function readCookies() {
    var displayCookies = "";
    var keyvalue = document.cookie.split(";");
    // loop to get cookie info
    for (var id in keyvalue) {
        var cookie = keyvalue[id].split("=");
        registrationCookies[cookie[0].trim()] = cookie[1];
    }
    // display cookie info
    document.getElementById("display3").innerHTML = registrationCookies["username"];
    document.getElementById("display4").innerHTML = registrationCookies["password"];
    document.getElementById("display5").innerHTML = registrationCookies["verifiedPassword"];
    document.getElementById("display6").innerHTML = registrationCookies["firstname"];
    document.getElementById("display7").innerHTML = registrationCookies["lastname"];
    document.getElementById("display8").innerHTML = registrationCookies["email"];
    document.getElementById("display9").innerHTML = registrationCookies["phonenumber"];
    document.getElementById("display10").innerHTML = registrationCookies["newsletter"];
}



