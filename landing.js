document.addEventListener('DOMContentLoaded', () => {
    const joinNowButton = document.getElementById('join-now');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementsByClassName('close')[0];

    joinNowButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Change navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#333';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});