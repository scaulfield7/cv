document.addEventListener("DOMContentLoaded", function() {
    console.log("Running enable-dark-mode.js");

    // Get theme toggle button and its elements
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const themeToggleLabel = document.getElementById('theme-toggle-label');

    // Check if dark mode preference is stored in localStorage
    const storedTheme = localStorage.getItem('theme');

    // If no theme preference is stored, default to dark mode
    if (storedTheme === 'dark' || storedTheme === null) {
        document.body.classList.add('dark-mode');  // Apply dark mode
        themeToggleIcon.className = 'fa fa-moon-o'; // Set moon icon
        themeToggleLabel.textContent = 'Dark Mode'; // Update button label
    } else {
        // Default to light mode if 'theme' is set to 'light'
        document.body.classList.remove('dark-mode');
        themeToggleIcon.className = 'fa fa-sun-o'; // Set sun icon
        themeToggleLabel.textContent = 'Light Mode'; // Update button label
    }

    // Function to toggle between dark and light mode
    function changeTheme() {
        console.log("Button clicked. Toggling theme...");
        if (document.body.classList.contains("dark-mode")) {
            // Switch to light mode
            document.body.classList.remove("dark-mode");
            localStorage.setItem('theme', 'light');
            themeToggleIcon.className = 'fa fa-sun-o'; 
            themeToggleLabel.textContent = 'Light Mode';
        } else {
            // Switch to dark mode
            document.body.classList.add("dark-mode");
            localStorage.setItem('theme', 'dark');
            themeToggleIcon.className = 'fa fa-moon-o';
            themeToggleLabel.textContent = 'Dark Mode';
        }
    }

    // Bind button to changeTheme function using event listener
    themeToggleButton.addEventListener("click", changeTheme);
});
