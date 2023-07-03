const bookListContainer = document.querySelector('.book-list');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const form = document.querySelector('form');
let bookList = [
  {
    title: 'The five love languages',
    author: 'Gary Chapman',
    id: 1,
  },
  {
    title: 'How to influence people',
    author: 'Dale Carnegie',
    id: 2,
  },
  {
    title: 'The river',
    author: 'Nelofar Zabi',
    id: 3,
  },
];
// Add book to booklist
function addBook(title , author, id){
   const newBook = {title , author, id};
   bookList.push(newBook);
}
// remove books from booklist
function removeBook(id) {
  bookList = bookList.filter(book => book.id !== id);
}
// Display books
function displayBook() {
  bookListContainer.innerHTML = '';
  const bookElement = bookList.map((book) => {
    const bookCard = `<li>
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove-btn" id=${book.id}>Remove</button>
  </li>`;
  return bookCard;
  }).join('')
   bookListContainer.insertAdjacentHTML('beforeend',bookElement);
   const removeBtns = bookListContainer.querySelectorAll('.remove-btn');
    removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeBookFromUI)
  })
}
//Removes book from UI
function removeBookFromUI(e) {
  const id = e.target.id;
  removeBook(+id);
  displayBook();
}
displayBook();
// Add book to UI
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 1000);
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author, id);
  displayBook();
})