 // JavaScript function to load external HTML content
 function loadContent(url) {
    fetch(url)
      .then(response => response.text()) // Get the HTML content as text
      .then(data => {
        // Update the main content with the fetched data
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading the content:", error);
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = "<h1>Content failed to load</h1>";
      });
  }