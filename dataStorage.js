function setLocalStorage(lang, theme, languageToggleChecked, themeToggleChecked) {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
    localStorage.setItem('languageToggleChecked', languageToggleChecked);
    localStorage.setItem('themeToggleChecked', themeToggleChecked);
}

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

    document.body.classList.remove('dark-theme', 'light-theme');

    if (theme === 'dark') {

        elementsWithThemeStyles.forEach(function (elementClass) {
            const elements = document.querySelectorAll(`.${elementClass}`);
            elements.forEach(function (element) {
                element.classList.add('dark-theme');
            });
        });
    } else {

        document.body.classList.add('light-theme');
    }
}

window.addEventListener('beforeunload', function() {

    const languageToggle = document.getElementById('languageToggle');
    const lang = languageToggle.checked ? 'ru' : 'en'; 

    const themeToggle = document.getElementById('themeToggle');
    const theme = themeToggle.checked ? 'dark' : 'light';

    const languageToggleChecked = languageToggle.checked;
    const themeToggleChecked = themeToggle.checked;

    setLocalStorage(lang, theme, languageToggleChecked, themeToggleChecked);
});

window.addEventListener('load', getLocalStorage);
