
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

    var x = document.querySelector("#search");
    x.style.display = "none";
    x.style.margin = "0%";
    x.style.padding = "0%";

    var y = document.querySelector("#apodimage");
    y.style.display = "none";
    y.style.margin = "0%";
    y.style.padding = "0%";


    // document.querySelector("#pipi").innerHTML += data.explanation;
    // document.querySelector("#pipi").innerHTML += '<img src ="' + data.url + '">';
    let text = "" ;
    let n = data.count ;
    for(let i = 0 ; i < n ; i++){
        text += '<br><p class="tech"><span class="intro_name"> Innovative ID Number: </span>' + data.results[i][0] + '</p>' ;
        text += '<p class="tech"><span class="intro_name"> Tech ID Number: </span>' + data.results[i][1] + '</p>' ;
        text += '<p class="tech"><span class="intro_name">Description: </span><br></p>' ;
        text += '<p id="ho">' + data.results[i][3] + '</p>'  ;
        text += '<p class="tech"><span class="intro_name">Area of Expertise: </span>' + data.results[i][5] + '</p>' ;     
        text += '<p id="imageurl" class="tech"><img src ="' + data.results[i][10] + '"></p><br><hr>' ;
        // data.results[i][10]

    }
    document.querySelector("#pipi").innerHTML += text;

    text = "";
}
