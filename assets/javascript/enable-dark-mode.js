document.addEventListener("DOMContentLoaded", function() {
  console.log("Running enable-dark-mode.js");
  // Check if dark mode preference is stored in localStorage and apply it
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    // If no theme preference is stored, set dark mode by default
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }

  // Allow toggling of dark mode on or off
  // TODO: Implement button or switch to call this function
  function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem('theme', 'dark');
    }
  }
});
