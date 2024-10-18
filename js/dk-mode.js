document.addEventListener('DOMContentLoaded', () => {
    // Select the Dark Mode Toggle Button
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check if the button exists
    if (!darkModeToggle) {
        console.error("Button with ID 'dark-mode-toggle' not found in the HTML.");
        return;
    }

    // Get the current theme from localStorage
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme if it is 'dark', and update the button text
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }

    // Add click event listener to the button
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Update the theme preference in localStorage and button text
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.textContent = 'Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.textContent = 'Dark Mode';
        }
    });
});
