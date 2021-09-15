// console.log('Books Library')


function Book(bname, author, type){
    this.bname = bname;
    this.author = author;
    this.type = type;
}

function Display(){}

Display.prototype.add = function(book){

    let books = localStorage.getItem('books');
    let booksarr;
    if(books == null)
        booksarr = [];
    else    
        booksarr = JSON.parse(books);
    
        booksarr.push(book);

    localStorage.setItem('books', JSON.stringify(booksarr));

    // tableBody = document.getElementById('tableBody');
    // let html = `
    //             <tr>
    //                 <td>${book.bname}</td>
    //                 <td>${book.author}</td>
    //                 <td>${book.type}</td>
    //             </tr>`
    // tableBody.innerHTML += html;
};

Display.prototype.clear = function(){
    let form = document.getElementById('libraryForm');
    form.reset();
};

Display.prototype.validate = function(book){
    if(book.bname.length > 2 || book.author.length > 2)
        return true;
    else   
        return false;
}

Display.prototype.show = function(type, msg){
    message = document.getElementById('message');
    message.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong> ${msg}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
    
    setTimeout(function(){
        message.innerHTML = '';
    }, 3000)
}

Display.prototype.showBooks = function(){
    let books = localStorage.getItem('books');
    let booksarr;
    if(books == null)
        booksarr = [];
    else    
        booksarr = JSON.parse(books);
    
    tableBody = document.getElementById('tableBody');
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

let form = document.getElementById('libraryForm');
form.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    // console.log('Clicked submit button');

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
    // console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Bood Added Successfully');
        display.showBooks();
    }
    else{
        display.show('warning', 'Please check the input once again!');
    }
}