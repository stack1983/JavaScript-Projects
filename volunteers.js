var $ = function (id) { return document.getElementById(id); };

// declare arrays for volunteer list
var volunteerArray = [];
var numberedElement = [];

// function to display volunteers on screen
var displayVolunteers = function () {   
    
    // clear numbered list
    numberedElement.length = 0;
    
	/* loop to iterate through volunteer array, place elements with list number in a numbered array and add to volunteer list */
    for (var i = 0; i < volunteerArray.length; i++) {
        numberedElement[i] = (i+1) + '. ' + volunteerArray[i];
        $("volunteerList").value = numberedElement.join("\n");
        
    }
};

var addVolunteer = function () {
    
    // get data from volunteer form and validate
    if ($("first_name").value === "") {
        $("volunteerList").value = 'Please enter first name.';
        return;
    }
    if ($("last_name").value === "") {
        $("volunteerList").value = 'Please enter last name.';
        return;
        
    } else {
    // assign input to variable
    var volunteerString = $("first_name").value + " " + $("last_name").value;
        
    // store the data in volunteer array
    volunteerArray.push(volunteerString);
        
    // display volunteer list
    displayVolunteers();
    
    // clear volunteer form for next entry
    volunteerString = "";    
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
        
    }
};

// function to remove element from volunteer array
var deleteVolunteer = function () {
    
    // get data from volunteer form and validate
    
    //check if first name field has a value
    if ($("first_name").value === "") {
        $("volunteerList").value = 'Please enter first name.';
        return;
    }
    //check if last name field has a value
    if ($("last_name").value === "") {
        $("volunteerList").value = 'Please enter last name.';
        return;
        
    } 
    
    // get the data from volunteer form
    var volunteerString = $("first_name").value + " " + $("last_name").value;
    
    // loop through array and look for matching value
	for (var i = 0; i < volunteerArray.length; i++) {
        if (volunteerString === volunteerArray[i]) {
            
            // remove matching element from array
            volunteerArray.splice(i, 1);
            
            
        // check if array is empty, if so, clear volunteer list area
        if (volunteerArray.length === 0) {
            $("volunteerList").value = "";
        }
            
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the volunteer form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
            
        break;
            
    } else {
        // notify user if no match is found
        $("volunteerList").value = 'Name not found in list.  Please enter another name.';
        
         // get the volunteer form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
        
        }
    }
    
};


// function to clear volunteer list on web page
var clearList = function () {   
    
	// clear volunteer and numbered array
    volunteerArray.length = 0;
    numberedElement.length = 0;
     
    // remove the volunteers list from the web page
    $("volunteerList").value = "";
    
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort volunteer list by first name
    volunteerArray.sort();
    
    // display volunteer list
    displayVolunteers();    
};


    
// When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
    $("refresh_button").onclick = displayVolunteers;
};