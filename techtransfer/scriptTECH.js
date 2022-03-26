
function buttonPress(){
    console.log("Button Pressed");
    sendApiRequest();
}

async function sendApiRequest() {

    let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";

    let response = await fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=' + API_KEY);
    console.log(response);

    let data = await response.json();
    console.log(data);

    useApiData(data);

}

function useApiData(data) {

    // document.querySelector("#pipi").innerHTML += data.explanation;
    // document.querySelector("#pipi").innerHTML += '<img src ="' + data.url + '">';
    let text = "" ;
    let n = data.count ;
    for(let i = 0 ; i < n ; i++){
        text += "<p>" + data.results[i][0] + "</p>" ;
        text += "<p>" + data.results[i][1] + "</p><br>" ;
        text += "<p>Description " + data.results[i][3] + "</p><br>" ;
        text += "<p>Area " + data.results[i][5] + "</p><br>" ;
        text += '<img src ="' + data.results[i][10] + '">' ;

    }
    document.querySelector("#pipi").innerHTML += text;

    text = "";
}
