document.addEventListener("DOMContentLoaded", function () {
    loadUsers();
});

function loadUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    Object.keys(localStorage).forEach(user => {
        if (user !== "currentUser") {
            const row = `<tr>
                <td>${user}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteUser('${user}')">Delete</button></td>
            </tr>`;
            userList.innerHTML += row;
        }
    });
}

function deleteUser(user) {
    localStorage.removeItem(user);
    loadUsers();
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
