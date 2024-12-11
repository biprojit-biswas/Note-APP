
const noteText = document.getElementById('noteText');
const addNoteButton = document.getElementById('addNote');
const notesList = document.getElementById('notesList');

function addNote() {
    const text = noteText.value.trim();
    if (text === '') {
        alert('Please enter a note.');
        return;
    }

    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    noteDiv.querySelector('.delete-btn').addEventListener('click', () => {
        notesList.removeChild(noteDiv);
    });

    notesList.appendChild(noteDiv);
    noteText.value = '';
}

addNoteButton.addEventListener('click', addNote);
