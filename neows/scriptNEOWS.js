var present_date ;
function buttonPress() {
    console.log("Button Pressed");
    sendApiRequest();
}

async function sendApiRequest() {

    let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";

    // const d = new Date();
    // let day = d.getUTCDate();
    // let month = d.getUTCMonth();
    // let year = d.getUTCFullYear();
    // let month_val = "";
    // if (month < 10) {
    //     month_val += "0";
    // }
    // month_val += month;

    // let day_val = "";
    // if (day < 10) {
    //     day_val += "0";
    // }
    // day_val += day;

    // let year_val = "";
    // year_val += year;

    present_date = "2022-04-20";

    let response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-04-15&end_date=2022-04-20&api_key=' + API_KEY);
    console.log(response);

    let data = await response.json();
    console.log(data);

    useApiData(data);

}

function useApiData(data) {
    // document.querySelector("#pipi").innerHTML += date;

    var x = document.querySelector("#search");
    x.style.display = "none";
    x.style.margin = "0%";
    x.style.padding = "0%";

    var y = document.querySelector("#apodimage");
    y.style.display = "none";
    y.style.margin = "0%";
    y.style.padding = "0%";

    let text = "<table>";

    //near_earth_objects["2022-03-29"][0].id
    text += "<tr><th>ID</th><th>NAME</th><th>Diameter</th><th>Relative Velocity</th><th>Closest approach</th></tr>";
    let n = data.near_earth_objects[present_date].length;
    for (let i = 0; i < n; i++){
        text += "<tr>" ;
        
            text += "<td>" + data.near_earth_objects[present_date][0].id + "</td>";
            text += "<td>" + data.near_earth_objects[present_date][i].name + "</td>";
            text += "<td>" + data.near_earth_objects[present_date][i].estimated_diameter.feet.estimated_diameter_min + "</td>";
            text += "<td>" + data.near_earth_objects[present_date][i].close_approach_data[0].relative_velocity.kilometers_per_hour + "</td>";
            text += "<td>" + data.near_earth_objects[present_date][i].close_approach_data[0].close_approach_date_full + "</td>";

        text += "</tr>" ;
    }

    text += "</table>";
    document.querySelector("#pipi").innerHTML += text;

    text = "";



}
