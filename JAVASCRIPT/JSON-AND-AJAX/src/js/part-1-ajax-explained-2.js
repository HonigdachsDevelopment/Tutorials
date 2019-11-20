// we are initialize a new XMLHttpRequest as variable "ourRequest"
var ourRequest = new XMLHttpRequest();
// now we are using the method "open" to establish the connection
// declaring if we want to GET or POST data by our request and the url to establish the connection to
ourRequest.open('GET', 'https://killphil.github.io/Tutorials/sources/json/tutorial-1/array-1.json');
// now we are declaring an anpnymous functionwhat should gonna happens when the data gets loaded
ourRequest.onload = function() {
    // now lets create a variable to make it possible to log out specified content
    // instead of simple logging all content out to the console
    // by default web browser interpret the data array as simple text string so we first will have to identify the data
    // our request as JSON. We do that by using the method JSON.parse for it
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};
ourRequest.send();