document.querySelectorAll('.skills-item').forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('flipped');
    });
});