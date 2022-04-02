
function buttonPress(){
    console.log("Button Pressed");
    sendApiRequest();
}

async function sendApiRequest() {

    let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";

    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY);
    console.log(response);

    let data = await response.json();
    console.log(data);

    useApiData(data);

}

function useApiData(data) {

    var x =document.querySelector("#search") ;
    x.style.display = "none";
    x.style.margin = "0%";
    x.style.padding = "0%";

    var y =document.querySelector("#apodimage") ;
    y.style.display = "none";
    y.style.margin = "0%";
    y.style.padding = "0%";



    document.querySelector("#pipi").innerHTML = '<p id="imagetitle"><span class="intro_name">Title: </span>' + data.title + '</p>' ;
    document.querySelector("#pipi").innerHTML += '<p id="imagedate"><span class="intro_name">Image taken on: </span>' + data.date + '</p>' ;
    document.querySelector("#pipi").innerHTML += '<p id="imageexplanation"><span class="intro_name">Context </span>:' + data.explanation + '</p>' ;
    document.querySelector("#pipi").innerHTML += '<img id="imageurl" src ="' + data.url + '">';
    document.querySelector("#pipi").innerHTML += '<p id="imagecopyright"><span class="intro_name">Taken By: </span>' + data.copyright + '</p>' ;
    

}
