document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aqui estan las credenciales
    if (username === 'Persona3' && password === 'Reload') {
      // Entramos a la siguiente página
      window.location.href = 'pagina2.html';
    } else {
      document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
  });
  