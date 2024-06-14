document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aquí puedes agregar tu lógica de autenticación
    if (username === 'Persona3' && password === 'Reload') {
      // Redirigir a otra página
      window.location.href = 'pagina2.html';
    } else {
      document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
  });
  