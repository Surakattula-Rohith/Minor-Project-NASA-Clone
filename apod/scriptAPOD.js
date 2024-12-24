function buttonPress(){
    sendApiRequest();
}

async function sendApiRequest() {
    let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY);
    let data = await response.json();
    useApiData(data);
}

function useApiData(data) {
    var x =document.querySelector("#loadContent") ;
    x.style.display = "none";
    x.style.margin = "0%";
    x.style.padding = "0%";
    var y =document.querySelector("#bufferimage") ;
    y.style.display = "none";
    y.style.margin = "0%";
    y.style.padding = "0%";
    document.querySelector("#content").innerHTML = '<p id="imagetitle"><span >Title: </span>' + data.title + '</p>' ;
    document.querySelector("#content").innerHTML += '<p id="imagedate"><span >Image taken on: </span>' + data.date + '</p>' ;
    document.querySelector("#content").innerHTML += '<p id="imageexplanation"><span >Context </span>:' + data.explanation + '</p>' ;
    document.querySelector("#content").innerHTML += '<img id="imageurl" src ="' + data.url + '">';
    document.querySelector("#content").innerHTML += '<p id="imagecopyright"><span>Taken By: </span>' + data.copyright + '</p>' ;
}
