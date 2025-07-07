document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.input-box input');
    inputs.forEach(function(input) {
        input.disabled = true;
    });

    setTimeout(function() {
        document.getElementById('spinner').style.display = 'none';
        var captchaText = document.getElementById('captchaText');
        captchaText.textContent = '¡Felicidades, eres humano!';
        captchaText.classList.add('success');
        inputs.forEach(function(input) {
            input.disabled = false;
        });
    }, 2200);

    // Validación de correo y mostrar botón
    var emailInput = document.getElementById('emailInput');
    var passwordInput = document.getElementById('passwordInput');
    var emailCheck = document.getElementById('emailCheck');
    var continueBtn = document.getElementById('continueBtn');
    var loginMessage = document.getElementById('loginMessage');
    var togglePassword = document.getElementById('togglePassword');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function updateContinueBtn() {
        if (validateEmail(emailInput.value) && passwordInput.value.trim() !== "") {
            continueBtn.style.display = 'block';
        } else {
            continueBtn.style.display = 'none';
        }
    }

    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            emailCheck.style.display = 'inline';
        } else {
            emailCheck.style.display = 'none';
        }
        updateContinueBtn();
    });

    passwordInput.addEventListener('input', function() {
        updateContinueBtn();
    });

    continueBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateEmail(emailInput.value) && passwordInput.value.trim() == "12345") {
            loginMessage.textContent = "Inicio de sesión correcto";
            loginMessage.style.display = "block";
        } else {
            loginmessageIncorrect.textContent = "Inicio de sesión incorrecto";
            loginmessageIncorrect.style.display = "block";
        }
    });

    // Mostrar/ocultar contraseña
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = '<img src="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/eye-outline.svg" alt="Ocultar" width="22">';
        } else {
            passwordInput.type = "password";
            togglePassword.innerHTML = '<img src="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/eye-off-outline.svg" alt="Mostrar" width="22">';
        }
    });
});