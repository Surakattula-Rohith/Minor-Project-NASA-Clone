
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

    document.querySelector("#pipi").innerHTML += data.explanation;
    document.querySelector("#pipi").innerHTML += '<img src ="' + data.url + '">';
}
