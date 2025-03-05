document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            register();
        });
    }
});

function register() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (localStorage.getItem(email)) {
        alert("User already exists! Please login.");
    } else {
        localStorage.setItem(email, JSON.stringify({ password: password, notes: [] }));
        window.location.href = "index.html";
    }
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        localStorage.setItem("currentUser", email);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login credentials!");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

