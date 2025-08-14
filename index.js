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

