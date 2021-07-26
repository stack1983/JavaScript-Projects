//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName, myHostName;
	
//Reciepient Name field code
    
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	
    //Print out result of recipient name
    console.log('Variable myRecipientName: ' + myRecipientName);

	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    
    
//Host Name field code
    //setting the variable to input the field's id named hostNameInput's value
    myHostName = document.getElementById("hostNameInput").value;
    
    //Print out result of host name
    console.log('Variable myHostName: ' + myHostName);

    
    //setting the variable input to the field's id named hostNamePlaceholder with the variable
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
}
