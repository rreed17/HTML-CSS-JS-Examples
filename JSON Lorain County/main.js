//targets the select element
let dropdown = document.getElementById('locality-dropdown');
//clears any options in the element
dropdown.length = 0;
//appends out default options
let defaultOption = document.createElement('option');
defaultOption.text = 'Choose City/Village or Township';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;
//Definies the the destination of json file
const url = '../county.json';
//Initializes the remote request
const request = new XMLHttpRequest();
request.open('Get', url, true);

request.onload = function(){
    if (request.status === 200){
        const data = JSON.parse(request.responseText);
        let option;
        //Creates an option element for each entry found and adds it the select list
        for (let i = 0; i < data.length; i++){
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].type;
            dropdown.add(option);
        }
    }else{
        //Reached the server, but it returned an error
        console.log('Its a no go');
    }
}

request.onerror = function(){
    console.error('An error occurred fetching the JSON from ' + url);
};
//sends the remote request
request.send();