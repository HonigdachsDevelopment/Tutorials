# JSON & AJAX BASIC TUTORIAL PT-3

1. check out the examples and readme of Part-1 to understand the basics of JSON data format and AJAX as our method 
of request
2. create an index.html similar to the index.html of this repository or use the provided one

#### What we're basically gonna do in our script PT-3
We're gonna load content from 3 different pages, each after the other and disable the possibility to pull data, 
if we received data from all three sources. In order to do that, we will hide the button. Also we want to access
the second property of our data and the third property which is technically an object in an object and nests 
two arrays on it own.

##### LINKS OF JSON FILES WE WANT TO ACCESS
- https://apemendelights-prvlution.github.io/prvlutions.github.io/jsondata-1/tutorial-1.json
- https://apemendelights-prvlution.github.io/prvlutions.github.io/jsondata-1/tutorial-2.json
- https://apemendelights-prvlution.github.io/prvlutions.github.io/jsondata-1/tutorial-3.json


#### Step-by-Step Part 3

1. In order to load thru the different urls that contains our data, we'll have to define the first page to load
````
var pageCounter = 1;
````
... dynamically increase the page number at the end of the source url we defined in our 'GET' request
````
ourRequest.open('GET', 'https://apemendelights-prvlution.github.io/prvlutions.github.io/jsondata-1/tutorial-' + pageNumber + '.json');
````
... and increase the page number after each time ourRequest sent data (which means after each time we clicked the button)

```
    ourRequest.send();
    pageNumber++;
```

2. As you can see, there is no more data after the third click because there are no more pages we can get data from.
So in order to disable the possibility to pull data, we'll add a css class (which we define in our stylesheet) with 
the property of "visibility: hidden" to hide the button.

````
    ourRequest.send();
    pageNumber++;
    if (pageNumber > 3){
        triggerBtn.classList.add("hide-me");
    }
````

3. In our renderTheContent function we want to access the second property of our data and the third property which is technically an 
object in an object and nests two arrays on it own. So first we declare that we do not want to end the rendered
sentence after the species, instead continue the sentence with " that likes to "...

````
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to ";
````
... and want loop thru the current objects nested objects array first item. So in order to do that we will have to
loop thru a for loop which is nested in our current for loop

```
    for (ii = 0; ii < data[i].foods.likes.length; ii++)();
```

It would render a string without any space between the requested data, which we need in order to render a readable sentence.
So we can create a if else statement inside the current loop to define that if it's the first item do nothing. So we set 
up our nested for loop as ii to declare that its the array in nested object:
````
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if ( ii == 0){
                htmlString += data[i].foods.likes[ii];
            } 
````
but if its the second or third item we want to render out a space between them

````
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if ( ii == 0){
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
```` 
Now the only thing that lasts is to close the paragraph after each sentence and we are fine
````
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if ( ii == 0){
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        htmlString += ".</p>";

```` 

Our whole function to render the content should now look like this:

```
function renderTheContent (data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if ( ii == 0){
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        htmlString += ".</p>";
    }
    ourContainer.insertAdjacentHTML('beforeend', htmlString);
}
```

4. If we now want to additionally render the "dislikes" property as well we can simply c+p our nested for loop
after a new htmlString such as " and dislikes "

````
function renderTheContent (data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if ( ii == 0){
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' but dislikes ';
        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if ( ii == 0){
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        htmlString += ".</p>";
    }
    ourContainer.insertAdjacentHTML('beforeend', htmlString);
}
````