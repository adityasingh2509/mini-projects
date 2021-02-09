const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or Light Images
function imageMode(color) {
    image1.src = `../images/undraw_proud_coder_${color}.svg`;
    image2.src = `../images/undraw_feeling_proud_${color}.svg`;
    image3.src = `../images/undraw_conceptual_idea_${color}.svg`;
}


function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].innerText = isDark ? "Dark Mode" : "Light Mode";
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}


// OPTIMZED ABOVE

// // Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].innerText = "Dark Mode";
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     imageMode('dark');
// }


// // Light Mode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].innerText = "Light Mode";
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light');
// }


// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", 'dark');
        localStorage.setItem('theme', 'dark');
        //darkMode(); Optimized
        toggleDarkLightMode(true)
    } else {
        document.documentElement.setAttribute("data-theme", 'light');
        localStorage.setItem('theme', 'light');
        //lightMode(); Optimized
        toggleDarkLightMode(false)
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        //darkMode(); Optimized
        toggleDarkLightMode(true)
    }
}