
function buttonPress() {
    console.log("Button Pressed");
    sendApiRequest();
}

async function sendApiRequest() {

    let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";

    let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=' + API_KEY);
    console.log(response);

    let data = await response.json();
    console.log(data);

    useApiData(data);

}

function useApiData(data) {

    var x = document.querySelector("#search");
    x.style.display = "none";
    x.style.margin = "0%";
    x.style.padding = "0%";

    var y = document.querySelector("#apodimage");
    y.style.display = "none";
    y.style.margin = "0%";
    y.style.padding = "0%";

    

    

    let n = data.photos.length;

    document.querySelector("#pipi").innerHTML = '<br>';
    for (let i = 0; i < 100; i++) {
        document.querySelector("#pipi").innerHTML += '<p id="cameraname"><span class="intro_name">Camera Name: </span>' + data.photos[i].camera.full_name + '</p>';
        document.querySelector("#pipi").innerHTML += '<p id="cameraid"><span class="intro_name">Camera ID: </span>' + data.photos[i].id + '</p>';
        document.querySelector("#pipi").innerHTML += '<p id="imageurl"><img src ="' + data.photos[i].img_src + '"></p>';
        document.querySelector("#pipi").innerHTML += "<br><hr><br>";
    }




}
