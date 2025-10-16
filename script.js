console.log("Hello from script.js!");
alert("Welcome to Dasmoto's Arts & Crafts!");

// Select the dark mode button
const darkModeBtn = document.getElementById("darkModeBtn");

// When the page loads, check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// When the button is clicked, toggle dark mode and remember the setting
darkModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // If dark mode is active, save that state
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});