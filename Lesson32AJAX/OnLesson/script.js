const url = ".data/employees.json";

fetch(url)
.then( function(response) {
    console.log(response.json())
        return response.json()

    }).then(myJson => console.log(JSON.stringify(myJson)))
    .catch(function (error) {
        console.log("ERROR!");
        console.error(error);
    })