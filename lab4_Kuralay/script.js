// Получаем доступ к элементам DOM
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

// Получаем заметки из Local Storage при загрузке страницы
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Функция для отображения заметок на странице
function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', () => {
            deleteNote(index);
        });
        li.appendChild(deleteBtn);
        notesList.appendChild(li);
    });
}

// Функция для добавления заметки
function addNote() {
    const newNote = noteInput.value.trim();
    if (newNote !== '') {
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
        noteInput.value = '';
    }
}

// Функция для удаления заметки
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

// Обработчик события для кнопки добавления заметки
addNoteBtn.addEventListener('click', addNote);

// При загрузке страницы отображаем существующие заметки
renderNotes();

