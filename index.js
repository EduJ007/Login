document.addEventListener('DOMContentLoaded', () => {
    const loginIcon = document.getElementById('login-icon');

    if (loginIcon) {
        loginIcon.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "login.html"; // abre na mesma aba
            // window.open("login.html", "_blank"); // se quiser nova aba
        });
    }
});
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    // Salva no localStorage
    localStorage.setItem("nibuyUser", username);

    // Redireciona para a página principal
    window.location.href = "index.html";
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});
