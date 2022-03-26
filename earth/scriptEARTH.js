
function buttonPress() {
    console.log("Button Pressed");
    sendApiRequest();
}

async function sendApiRequest() {

    let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";

    const d = new Date();
    let day = d.getUTCDate();
    let month = d.getUTCMonth();
    let year = d.getUTCFullYear();
    let month_val = "";
    if (month < 10) {
        month_val += "0";
    }
    month_val += month;

    let day_val = "";
    if (day < 10) {
        day_val += "0";
    }
    day_val += day;

    let year_val = "";
    year_val += year;

    present_date = year_val + "-" + month_val + "-" + day_val;


    // var lat , long ;

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(getPos);
    //  }
    //  function getPos(position) {
    //     lat = position.coords.latitude ;
    //     long = position.coords.longitude;
    //  }


    //  console.log(lat + " " + long) ;

    const x = document.getElementById("demo");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    var longpos ;
    var latpos ;
    function showPosition(position) {
        longpos = position.coords.longitude;
        latpos = position.coords.latitude;
        x.innerHTML = "Latitude: " + latpos +
            "<br>Longitude: " + longpos;
    }

    let p = "" ;
    p += longpos ;
    let fp = parseFloat(p) ;

    let q = "" ;
    p += latpos ;
    let fa = parseFloat(q) ;


    //https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY
    let response = await fetch('https://api.nasa.gov/planetary/earth/assets?lon=' + p + '&lat=' + q + '&date=' + present_date + '+&dim=0.10&api_key=' + API_KEY);
    console.log(response);

    let data = await response.json();
    console.log(data);

    useApiData(data);

}

function useApiData(data) {

    // document.querySelector("#pipi").innerHTML += data.explanation;
    // document.querySelector("#pipi").innerHTML += '<img src ="' + data.url + '">';
    // let text = "" ;
    // let n = data.count ;
    // for(let i = 0 ; i < n ; i++){
    //     text += "<p>" + data.results[i][0] + "</p>" ;
    //     text += "<p>" + data.results[i][1] + "</p><br>" ;
    //     text += "<p>Description " + data.results[i][3] + "</p><br>" ;
    //     text += "<p>Area " + data.results[i][5] + "</p><br>" ;
    //     text += '<img src ="' + data.results[i][10] + '">' ;

    // }
    // document.querySelector("#pipi").innerHTML += text;

    // text = "";
}
