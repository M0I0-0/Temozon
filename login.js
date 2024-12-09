document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener el valor ingresado en el campo de usuario
    const username = document.getElementById('username').value.toLowerCase();

    // Validar el tipo de usuario y redirigir a la interfaz correspondiente
    if (username === 'admin') {
        window.location.href = 'admin.html'; // Redirige a la interfaz de administrador
    } else if (username === 'gerente') {
        window.location.href = 'gerente.html'; // Redirige a la interfaz de gerente
    } else if (username === 'bodega') {
        window.location.href = 'bodega.html';
    } else if (username === 'auxiliar') {
        window.location.href = 'empaux.html';
    } else {
        alert('Usuario no reconocido. Por favor, verifica tus credenciales.');
    }
}); 