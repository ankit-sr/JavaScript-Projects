console.log("Creating Books Library Using ES6 Classes");

class Book {
  constructor(bname, author, type) {
    this.bname = bname;
    this.author = author;
    this.type = type;
  }

  add = function() {
    let books = localStorage.getItem('books');
    let booksarr;
    if(books == null)
        booksarr = [];
    else    
        booksarr = JSON.parse(books);
    let bookobj = {
        'bname': this.bname,
        'author': this.author,
        'type': this.type
    };
    booksarr.push(bookobj);

    localStorage.setItem('books', JSON.stringify(booksarr));

  }

  clear = function(){
    let form = document.getElementById('libraryForm');
    form.reset();
  }

  validate = function(){
    if(this.bname.length > 2 || this.author.length > 2)
        return true;
    else   
        return false;
  }

  show = function(type, msg){
    let message = document.getElementById('message');
    message.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong> ${msg}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
    
    setTimeout(function(){
        message.innerHTML = '';
    }, 3000)
  }

  static showBooks = function(){
    let books = localStorage.getItem('books');
    let booksarr;
    if(books == null)
        booksarr = [];
    else    
        booksarr = JSON.parse(books);
    
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    booksarr.forEach(function(element){
            let html = `
                        <tr>
                            <td>${element.bname}</td>
                            <td>${element.author}</td>
                            <td>${element.type}</td>
                        </tr>`
            tableBody.innerHTML += html;
    });
  }
}

Book.showBooks();

let form = document.getElementById('libraryForm');
form.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    console.log('Clicked submit button');

    let bname = document.getElementById('bname').value;
    let author = document.getElementById('author').value;
    let programming = document.getElementById('programming');
    let fiction = document.getElementById('fiction');
    let magazine = document.getElementById('magazine');

    let type;
    if(programming.checked)
        type = programming.value;
    else if(fiction.checked)
        type = fiction.value;
    else if(magazine.checked)
        type = magazine.value;

    let book = new Book(bname, author, type);
    console.log(book);

    if(book.validate()){
        book.add(book);
        book.clear();
        book.show('success', 'Bood Added Successfully');
        Book.showBooks();
    }
    else{
        book.show('warning', 'Please check the input once again!');
    }
}
