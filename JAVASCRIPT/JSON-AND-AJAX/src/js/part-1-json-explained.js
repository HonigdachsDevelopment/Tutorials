// JSON IN JS

// JSON OBJECTS
// Object "myCat"
var myCat = {
    // properties
    "name": "Hello Kitty",
    "species": "cat",
    "favFood": "tuna"
};
// access the property "favFood" of Object "myCat"
myCat.favFood;


// JSON IN JSON ARRAY FORMAT
// Array myFavColors
var myFavColors =["blue", "green", "purple"];
// Accessing JSON ARRAY from JS, define OBJECT and number of property
// JSON properties are zero based, which means that [0] access the first value in an array JSON
// Lets access the second value "green"
myFavColors[1];


// MIXING ARRAYS AND OBJECTS

// declaring an array containing objects
var thePets = [
    // object one
    {
        "name": "Meowsalot",
        "species": "cat",
        "favFood": "tuna"
    },
    // object two
    {
        "name": "Barsalot",
        "species": "dog",
        "favFood": "meat"
    }
];

