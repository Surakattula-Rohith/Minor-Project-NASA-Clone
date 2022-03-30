
function buttonPress(){
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

    let n = data.photos.length ;


    for(let i = 0 ; i < 100 ; i++){
        document.querySelector("#pipi").innerHTML += "Camera Name:" ;
        document.querySelector("#pipi").innerHTML += data.photos[i].camera.full_name ;
        document.querySelector("#pipi").innerHTML += "<br>Camera ID:";
        document.querySelector("#pipi").innerHTML += data.photos[i].id ;
        document.querySelector("#pipi").innerHTML += "<br>Image Taken :";
    
        document.querySelector("#pipi").innerHTML += '<img src ="' + data.photos[i].img_src + '">';
        document.querySelector("#pipi").innerHTML += "<br><hr><br><br>" ;
    }


    

}
