document.addEventListener('DOMContentLoaded', function () {
    // Lightbox: Click on images to open them in a lightbox
    var images = document.querySelectorAll('.fullscreenable');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.querySelector('.lightbox-img');
    var closeButton = document.querySelector('.close-lightbox');

    images.forEach(function(image) {
        image.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the click event of the parent section
            lightbox.style.display = 'flex'; // Only change display here
            lightboxImg.src = this.src;
        });
    });    

    // Close the lightbox when the close button is clicked
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering the click event of the image
        lightbox.style.display = 'none';
    });

});

document.addEventListener('DOMContentLoaded', function () {
    // Navigation: Click on sections to go to a URL
    var clickableSections = document.querySelectorAll('.section[data-href]');
    clickableSections.forEach(function(section) {
        section.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-href');
        });
    });
});
