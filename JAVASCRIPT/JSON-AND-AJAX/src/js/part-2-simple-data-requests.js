var ourContainer = document.getElementById("our-container");
// accessing our trigger element by id
var triggerBtn = document.getElementById("trigger-btn");

// defining the event listener with the type "click"
triggerBtn.addEventListener("click", function () {

    // fire our request triggered by the event type click
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://killphil.github.io/Tutorials/sources/json/tutorial-1/array-1.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        // console.log(ourData[0]);
        renderTheContent(ourData);
    };

    ourRequest.send();
});

function renderTheContent (data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is frequently " + data[i].hobby + "</p>" ;

    }
    // ourContainer.insertAdjacentHTML('beforeend', `testing123`);
    ourContainer.insertAdjacentHTML('beforeend', htmlString);
}