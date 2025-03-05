document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

function addNote() {
    const stickyWall = document.getElementById("sticky-wall");

    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    
    noteCard.innerHTML = `
        <textarea class="note-content" placeholder="Write your note..."></textarea>
        <button class="btn btn-danger btn-sm mt-2" onclick="removeNote(this)">Delete</button>
    `;

    stickyWall.appendChild(noteCard);
    saveNotes();
}

function removeNote(button) {
    button.parentElement.remove();
    saveNotes();
}

function saveNotes() {
    const notes = [];
    document.querySelectorAll(".note-content").forEach(note => {
        notes.push(note.value);
    });

    const user = localStorage.getItem("currentUser");
    if (user) {
        const userData = JSON.parse(localStorage.getItem(user));
        userData.notes = notes;
        localStorage.setItem(user, JSON.stringify(userData));
    }
}

function loadNotes() {
    const user = localStorage.getItem("currentUser");
    if (user) {
        const userData = JSON.parse(localStorage.getItem(user));
        if (userData.notes) {
            const stickyWall = document.getElementById("sticky-wall");
            userData.notes.forEach(noteText => {
                const noteCard = document.createElement("div");
                noteCard.classList.add("note-card");
                noteCard.innerHTML = `
                    <textarea class="note-content">${noteText}</textarea>
                    <button class="btn btn-danger btn-sm mt-2" onclick="removeNote(this)">Delete</button>
                `;
                stickyWall.appendChild(noteCard);
            });
        }
    }
}
