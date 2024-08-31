document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');

    // Maneja el cambio de vista entre inicio de sesión y registro
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
    });

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        registerContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });

    // Maneja el envío del formulario de inicio de sesión
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aquí agregarías la lógica para autenticar al usuario, por ejemplo:
        console.log(`Iniciar sesión con: ${email}, ${password}`);

        // Simulación de autenticación exitosa
        if (email === "usuario@ejemplo.com" && password === "contraseña123") {
            alert('Inicio de sesión exitoso');
            // Redirecciona a la página del menú del restaurante
            window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu página de menú
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });

    // Maneja el envío del formulario de registro
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (registerPassword !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Aquí agregarías la lógica para registrar al usuario, por ejemplo:
        console.log(`Registrarse con: ${name}, ${registerEmail}, ${registerPassword}`);

        // Simulación de registro exitoso
        alert('Registro exitoso');
        // Redireccionar a otra página o realizar otra acción
    });
});
