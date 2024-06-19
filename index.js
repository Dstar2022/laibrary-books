document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: 'Book One', author: 'NCERT' },
        { title: 'Book Two', author: 'PHYSICS Two' },
        { title: 'Book Three', author: 'GENERAL KNOWLEDGE' },
        { title: 'Book Four', author: 'Chemistry' },
        { title: 'Book Five', author: 'Math' },
    ];

    const bookList = document.getElementById('book-list');

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
        bookList.appendChild(bookItem);
    });
});
