const bookListContainer = document.querySelector('.book-list');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const form = document.querySelector('form');

class BookList {
  constructor() {
    this.bookArray = [];
  }

  addBook(title, author, id) {
    const newBook = { title, author, id };
    this.bookArray = [...this.bookArray, newBook];
  }

  removeBook(id) {
    this.bookArray = this.bookArray.filter((book) => book.id !== id);
  }

  displayBook() {
    bookListContainer.innerHTML = '';
    const bookElement = this.bookArray.map((book) => {
      const bookCard = `  <li>
      <div class="title--and--author">
        <p>"${book.title}"</p>
        <span>by</span>
        <p>${book.author}</p>
      </div>
      <button class="remove-btn" id=${book.id}>Remove</button>
    </li>`;
      return bookCard;
    }).join('');
    bookListContainer.insertAdjacentHTML('beforeend', bookElement);
    this.checkBookListLength();
    const removeBtns = bookListContainer.querySelectorAll('.remove-btn');
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const { id } = e.target;
        this.removeBook(+id);
        this.displayBook();
        this.addAndUpdateBooksToLocalStorage();
      });
    });
  }

  checkBookListLength() {
    return this.bookArray.length > 0 ? bookListContainer.classList.add('show--border') : bookListContainer.classList.remove('show--border');
  }

  addBookToUI() {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = Math.floor(Math.random() * 2000);
      const title = titleInput.value;
      const author = authorInput.value;
      this.addBook(title, author, id);
      this.addAndUpdateBooksToLocalStorage();
      this.displayBook();
    });
  }

  addAndUpdateBooksToLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(this.bookArray));
  }

  getBookFromLocalStorage() {
    return localStorage.getItem('bookList') ? JSON.parse(localStorage.getItem('bookList')) : this.bookArray;
  }
}

const book = new BookList();
window.addEventListener('DOMContentLoaded', () => {
  book.bookArray = book.getBookFromLocalStorage();
  book.displayBook();
  book.addBookToUI();
});