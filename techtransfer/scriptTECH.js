
function buttonPress(){
    sendApiRequest();
}

async function sendApiRequest() {

    let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";
    let response = await fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=' + API_KEY);
    
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

  let text = "" ;
  let n = data.count ;
  for(let i = 0; i < n; i++){
      text += `
      <div class="tech-card">
          <p class="tech-info"><span class="label">Innovative ID Number: </span><span class="value">${data.results[i][0]}</span></p>
          <p class="tech-info"><span class="label">Tech ID Number: </span><span class="value">${data.results[i][1]}</span></p>
          <p class="tech-info"><span class="label">Description: </span></p>
          <p class="tech-description">${data.results[i][3]}</p>
          <p class="tech-info"><span class="label">Area of Expertise: </span><span class="value">${data.results[i][5]}</span></p>
          <div class="tech-image-container">
              <img class="tech-image" src="${data.results[i][10]}" alt="Tech Image">
          </div>
          <hr class="divider">
      </div>
      `;
  }
  document.querySelector("#content").innerHTML += text;
  
}
