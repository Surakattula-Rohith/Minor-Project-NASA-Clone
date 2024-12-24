function buttonPress() {
  sendApiRequest();
}

async function sendApiRequest() {
  let API_KEY = "GAa8k8q7BiG5xUuGBKxrpuXCv1XjRWbHi4ImRd3J";
  let response = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=" +
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

  // Generate 96 unique random numbers between 0 and 1000
  let randomIndices = [];
  while (randomIndices.length < 96) {
    let randomNumber = Math.floor(Math.random() * 1000);
    if (!randomIndices.includes(randomNumber)) {
      randomIndices.push(randomNumber);
    }
  }

  // Display data for the selected random indices
  document.querySelector("#content").innerHTML = ""; // Clear existing content

  randomIndices.forEach((i) => {
    if (i <= data.photos.length) {
      // Ensure the index is within the available range
      const block = `
            <div>
                <p id="cameraname"><span>Camera Name: </span>${data.photos[i].camera.full_name}</p>
                <p id="cameraid"><span>Camera ID: </span>${data.photos[i].id}</p>
                <p id="imageurl"><img src="${data.photos[i].img_src}" alt="Mars Image"></p>
            </div>
        `;
      document.querySelector("#content").innerHTML += block;
    }
  });
}
