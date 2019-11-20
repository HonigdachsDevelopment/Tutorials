# JSON & AJAX BASIC TUTORIAL

1. check out the examples and readme of Part-1 to understand the basics of JSON data format and AJAX as our method 
of request
2. create an index.html similar to the index.html of this repository or use the provided one

#### What we're basically gonna do in our script
We're gonna create an event listener (onclick.button) to run an AJAX call when the event is triggered and
render the GET data content to an container we defined in our HTML

#### Step-by-Step Part 2

1. we will have to create our event listener. For that we will create a button with an ID of our choice 
(I used "trigger-btn") in HTML. We will trigger the identified element by defining a variable in our script that
uses the DOM function "document.getElementById" to get the trigger element in our HTML.

#### script.js
````
var triggerBtn = document.getElementById("trigger-btn");
````
#### index.html

````
  <button id="trigger-btn">FETCH DATA</button>
````
2. we're gonna create an eventlistener with an anonymous function ("click", function()) 

````
triggerBtn.addEventListener("click", function () {

});
````
... which contains our request we've been define in ajax-explained-2. 
To test this step we can log the result to the browser console

````
triggerBtn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://apemendelights-prvlution.github.io/prvlutions.github.io/jsondata-1/tutorial-2.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);

        console.log(ourData[0]);
    };
    ourRequest.send();
});
````

3. now the next thing we wanna do is to add the pulled data content to our html-div with the id "data-container".
In order to do that, we're gonna create a new function ("renderTheContent") and fire it instead of logging it 
out to the console. 

```
var ourContainer = document.getElementById("our-container");

```
Then we will need to target our "data-container" by getElementbyID. 


... and using the global DOM-Element method "insertAdjacentHTML" which needs us to define the position and content we want to insert. We can test that by declaring 'beforeend' 
as position and 'Hello World' as simple text to render.

````
function renderTheContent (data) {
    ourContainer.insertAdjacentHTML('beforeend', `Hello World`);
}
````

4. But we want to render the content by using a variable which loops thru our JSON data. So first we create a variable
with an empty string and an id our choice (I used "htmlString") and a for loop that loops thru the array. So we define
i as 0; and increment it as long as i is smaller than the length of our array. In any loop that runs for i we want to 
access and render the first "name" property. 


````
function renderTheContent (data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }
    ourContainer.insertAdjacentHTML('beforeend', htmlString);
}
````