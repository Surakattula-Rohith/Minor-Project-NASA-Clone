var present_date;
function buttonPress() {
  sendApiRequest();
}

async function sendApiRequest() {
  let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";
  present_date = "2024-12-23";
  let response = await fetch(
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-12-16&end_date=2024-12-23&api_key=" +
      API_KEY
  );

  let data = await response.json();
  useApiData(data);
}

function useApiData(data) {
  var x = document.querySelector("#loadContent");
  x.style.display = "none";
  x.style.margin = "0%";
  x.style.padding = "0%";

  var y = document.querySelector("#bufferimage");
  y.style.display = "none";
  y.style.margin = "0%";
  y.style.padding = "0%";

  let text = "<table class='styled-table'>";

  text +=
    "<thead><tr><th>ID</th><th>NAME</th><th>Diameter (ft)</th><th>Relative Velocity (km/h)</th><th>Closest Approach</th></tr></thead>";
  text += "<tbody>";
  let n = data.near_earth_objects[present_date].length;
  for (let i = 0; i < n; i++) {
    text += "<tr class='data-row'>";

    text +=
      "<td class='data-id'>" +
      data.near_earth_objects[present_date][i].id +
      "</td>";
    text +=
      "<td class='data-name'>" +
      data.near_earth_objects[present_date][i].name +
      "</td>";
    text +=
      "<td class='data-diameter'>" +
      data.near_earth_objects[present_date][i].estimated_diameter.feet
        .estimated_diameter_min +
      "</td>";
    text +=
      "<td class='data-velocity'>" +
      data.near_earth_objects[present_date][i].close_approach_data[0]
        .relative_velocity.kilometers_per_hour +
      "</td>";
    text +=
      "<td class='data-approach'>" +
      data.near_earth_objects[present_date][i].close_approach_data[0]
        .close_approach_date_full +
      "</td>";

    text += "</tr>";
  }

  text += "</tbody>";
  text += "</table>";
  document.querySelector("#content").innerHTML += text;
}
