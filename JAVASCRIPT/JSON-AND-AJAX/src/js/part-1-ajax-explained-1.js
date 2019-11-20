// we are initialize a new XMLHttpRequest as variable "ourRequest"
var ourRequest = new XMLHttpRequest();
// now we are using the method "open" to establish the connection
// declaring if we want to GET or POST data by our request and the url to establish the connection to
ourRequest.open('GET', 'https://killphil.github.io/Tutorials/sources/json/tutorial-1/array-1.json');
// now we are declaring an anpnymous functionwhat should gonna happens when the data gets loaded
ourRequest.onload = function() {
    // for simple example we just want to log all data responded to our request to the console
    console.log(ourRequest.responseText);
};
ourRequest.send();