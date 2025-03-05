function checkAuth() {
    if (!localStorage.getItem("currentUser")) {
        window.location.href = "index.html";
    }
}

document.addEventListener("DOMContentLoaded", checkAuth);
