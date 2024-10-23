document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Wait for the entire page to load
    window.addEventListener('load', function() {
        document.body.classList.add('page-loaded');

        // Add the looping animation to the h1 after it fades in
        const heroH1 = document.querySelector('.hero-content h1');
        setTimeout(() => {
            heroH1.classList.add('page-loaded-loop');
        }, 2000); // Delay to allow fade-in first
    });

    // Adjust playback speed for video backgrounds
    const backgroundVideos = document.querySelectorAll('video');
    
    backgroundVideos.forEach(video => {
        video.playbackRate = 2.0; // Change 2.0 to the desired speed (e.g., 1.5 for 1.5x, 0.5 for half speed)
    });

    // Initialize EmailJS with your public API key
    emailjs.init('9sJ-V4V4EN_WAC29F');

    // Handle form submission for the contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data using EmailJS
        emailjs.sendForm('service_2oz0sh4', 'template_ysuy09o', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
                contactForm.reset(); // Reset the form fields after successful submission
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send your message. Please try again.');
            });
    });
});
