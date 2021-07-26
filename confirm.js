var queryArray = [];
function display() {
    // validate presence of query string
    if (location.search) {
        var queryData = location.search;
        // remove question mark from query string
        document.getElementById("display1").innerHTML = queryData;
        var key=[];
        var value=[];
        var string1 = queryData.split("?")[1].split("&");
        //document.getElementById("display2").innerHTML = string1;
        for (var initialVar of string1) {
            var str = initialVar.split("=") 
            key.push(str[0]);
            value.push(str[1]);
        }
        var counter = key.length;
        var displayString = "";
        for (var initialVar=0; initialVar < counter; initialVar++) {
            displayString += key[initialVar]+':'+value[initialVar]+'<br/>';
        }
        document.getElementById("display2").innerHTML=displayString;
    }
}



