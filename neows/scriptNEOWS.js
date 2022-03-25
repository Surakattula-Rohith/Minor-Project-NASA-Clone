
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

    let present_date = year_val + "-" + month_val + "-" + day_val;

    let response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + present_date + '&end_date=' + present_date + '&api_key=' + API_KEY);
    console.log(response);

    let data = await response.json();
    console.log(data);

    useApiData(data);

}

function useApiData(data) {
    // document.querySelector("#pipi").innerHTML += date;

    let text = "<table>";
    text += "<tr><th>ID</th><th>NAME</th><th>Diameter</th><th>Relative Velocity</th><th>Closest approach</th></tr>";
    let n = data.element_count ;
    for (let i = 0; i < n; i++){
        text += "<tr>" ;
        
            text += "<td>" + data.near_earth_objects["2022-02-25"][i].id + "</td>";
            text += "<td>" + data.near_earth_objects["2022-02-25"][i].name + "</td>";
            text += "<td>" + data.near_earth_objects["2022-02-25"][i].estimated_diameter.feet.estimated_diameter_min + "</td>";
            text += "<td>" + data.near_earth_objects["2022-02-25"][i].close_approach_data[0].relative_velocity.kilometers_per_hour + "</td>";
            text += "<td>" + data.near_earth_objects["2022-02-25"][i].close_approach_data[0].close_approach_date_full + "</td>";

        text += "</tr>" ;
    }

    text += "</table>";
    document.querySelector("#pipi").innerHTML += text;

    text = "";



}
