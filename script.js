//your JS code here. If required.
const searchDiv = document.querySelector('.search');
const searchInput = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', () => {
    searchDiv.classList.add('active');
    searchInput.focus();
});

// Remove active class when input is not focused
searchInput.addEventListener('blur', () => {
    searchDiv.classList.remove('active');
});