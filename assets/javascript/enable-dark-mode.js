// Set dark mode as the default
document.body.classList.add("dark-mode");

// Save the preference in localStorage to persist the theme across page reloads
localStorage.setItem('theme', 'dark');

// Allow toggling of dark mode on and off
function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem('theme', 'dark');
    }
}
