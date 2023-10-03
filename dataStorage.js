// Function to set language and theme in localStorage
function setLocalStorage(lang, theme, languageToggleChecked, themeToggleChecked) {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
    localStorage.setItem('languageToggleChecked', languageToggleChecked);
    localStorage.setItem('themeToggleChecked', themeToggleChecked);
}

// Function to get language and theme from localStorage and apply them
function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        const theme = localStorage.getItem('theme');
        const languageToggleChecked = localStorage.getItem('languageToggleChecked') === 'true';
        const themeToggleChecked = localStorage.getItem('themeToggleChecked') === 'true';
        getTranslate(lang);
        setTheme(theme);
        
        // Set the checkbox states based on the stored values
        const languageToggle = document.getElementById('languageToggle');
        const themeToggle = document.getElementById('themeToggle');
        languageToggle.checked = languageToggleChecked;
        themeToggle.checked = themeToggleChecked;
    }
}


function setTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove('dark-theme', 'light-theme');
    
    // Apply the selected theme
    if (theme === 'dark') {
        // Apply dark theme
        elementsWithThemeStyles.forEach(function (elementClass) {
            const elements = document.querySelectorAll(`.${elementClass}`);
            elements.forEach(function (element) {
                element.classList.add('dark-theme');
            });
        });
    } else {
        // Apply light theme (or any other theme)
        document.body.classList.add('light-theme');
    }
}

// Event listener to save language and theme in localStorage before page unload
window.addEventListener('beforeunload', function() {
    // Retrieve the user's selected language and theme based on checkboxes
    const languageToggle = document.getElementById('languageToggle');
    const lang = languageToggle.checked ? 'ru' : 'en'; // Assuming 'ru' for Russian and 'en' for English

    const themeToggle = document.getElementById('themeToggle');
    const theme = themeToggle.checked ? 'dark' : 'light'; // Assuming 'dark' and 'light' themes

    // Save the checkbox states
    const languageToggleChecked = languageToggle.checked;
    const themeToggleChecked = themeToggle.checked;

    setLocalStorage(lang, theme, languageToggleChecked, themeToggleChecked);
});

// Event listener to get language and theme from localStorage on page load
window.addEventListener('load', getLocalStorage);
