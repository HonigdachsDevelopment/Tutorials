# JSON & AJAX BASIC TUTORIAL PT-4

To check if there is a error during establishing the connection to the server or the connection was failed
you can just create an if else statement and nest our "renderTheContent" function. So if there is no error
during connecting to the server we renderTheContent but if the connection was established but the server
response with a failure, an alert will be fired. 

```
        if (ourRequest.status >= 200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);

            renderTheContent(ourData);
        } else {
                alert("Connection has been established but there the server replied with an error");
        }
    };
```
To encircle the error we can also add a function that fires an alert if there was an error during establishing a
connection to the server

```
    ourRequest.onerror = function(){
        alert("Connection error - please check the spelling of the url used in your request");
    };
```