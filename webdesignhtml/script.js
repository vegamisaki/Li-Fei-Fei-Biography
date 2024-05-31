document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle active class for accordion button
            this.classList.toggle('active');

            // Toggle panel visibility
            const panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }

            // Apply zoom effect
            button.classList.add('zoom-effect');
            setTimeout(() => {
                button.classList.remove('zoom-effect');
            }, 300);
        });
    });
});
