# ABOUT JSON
JSON is the most common way to store content in a dynamic source. This happens in OBJECTS stored into an ARRAY.

JSON stands for:
- J ava
- S cript
- O bject
- N otation




## THE JSON OBJECT

*1. Defining an object "myCat" with 3 properties*

````
var myCat = {
     "name": "Meowsalot",
     "species": "cat",
     "favFood": "tuna"
};
````

*2. access the property "favFood" of Object "myCat"*
````
myCat.favFood;
````

#### JSON ARRAYS BASIC FORMAT

*1. Defining an array with an object which just has one property*

````
var myFavColors =["blue", "green", "purple"];
````

*2. Accessing JSON ARRAY from JS, define OBJECT and number of property*

###### *FYI: JSON properties are zero based, which means that [0] access the first value in an array JSON*
````
myFavColors[1];
````

#### JSON IN WEB ARRAYS CONTAINING MULTIPLE OBJECTS
Declaring an array containing two objects, with same properties. Objects in JSON arrays are also called items
````
var thePets = [
    {
        "name": "Meowsalot",
        "species": "cat",
        "favFood": "tuna"
    },
    {
        "name": "Barsalot",
        "species": "dog",
        "favFood": "meat"
    }
];
````
Accessing the second item in this array and one of its properties

````
thePets[2].favFood;
````
