
function displayDetails(name, role) {
    const detailsContainer = document.getElementById("member-details");
    const nameElement = document.getElementById("name");
    const roleElement = document.getElementById("role");
  
    nameElement.textContent = "Name: " + name;
    roleElement.textContent = "Role: " + role;
  
    detailsContainer.style.display = "block";
  }
  
  // Optional: Hide the details when the mouse moves out of the picture.
  function hideDetails() {
    const detailsContainer = document.getElementById("member-details");
    detailsContainer.style.display = "none";
  }
  
  // Add an event listener to hide the details when the mouse moves out of the picture.
  document.getElementById("member-details").addEventListener("mouseout", hideDetails);