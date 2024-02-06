
document.addEventListener("DOMContentLoaded", function() {
    const formControls = document.querySelectorAll('.form-control');

    formControls.forEach(control => {
        control.addEventListener('focus', function() {
            this.classList.add('focused');
        });

        control.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
});

