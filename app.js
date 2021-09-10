console.log('This is notes taking app.')

showNotes();


let addNoteBtn = document.getElementById('addNoteBtn');
addNoteBtn.addEventListener('click', function(e){
    let title = document.getElementById('title');
    let notetxt = document.getElementById('addtext');
    let notes = localStorage.getItem('notes');
    if(title.value != '' && notetxt.value != '')
    {
        if(notes == null)
            notesarr = [];
        else{        
            notesarr = JSON.parse(notes);
        }
        let noteobj = {
            'title': title.value,
            'notetxt': notetxt.value
        } 
        notesarr.push(noteobj);
        localStorage.setItem('notes', JSON.stringify(notesarr));
        title.value = '';
        addtext.value = '';
        
        console.log(notesarr);

        showNotes();
    }
    
});

function showNotes(){

    let notes = localStorage.getItem('notes');
    if(notes == null)
        notesarr = [];
    else{
        notesarr = JSON.parse(notes);
    }

    let html = '';
    console.log(notesarr);
    console.log(notesarr.length);
    if(notesarr.length == '0')
            html = '<p class="lead"> Nothing to show here. Please add a note. </p>';
    else{
        notesarr.forEach(function(element, index){
            console.log(element)
            html += `
                <div class="noteCard card mx-2 my-2" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title" id="card-title"> ${(index+1)+ ".  " + element.title} <hr> </h5>
                    <p class="card-text" id="card-note"> ${element.notetxt} </p>
                    </div>
                    <button class="btn btn-danger mb-3 mx-5" id="${index}" onclick="delNote(this.id)">Delete Note</button>
                </div>
                `;
        });
    }

    let notesElement = document.getElementById('notes');
        
    notesElement.innerHTML = html;

        // console.log(notesElement);
}

function delNote(index){
    let notes = localStorage.getItem('notes');
    let notesarr = JSON.parse(notes);

    notesarr.splice(index,1);

    localStorage.setItem('notes', JSON.stringify(notesarr));

    showNotes();
}

let search = document.getElementById('search');
search.addEventListener('input', function(){
    let input = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function(element){
        title = element.getElementsByTagName('h5')[0].innerText.toLowerCase();
        notetxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();

        if(title.includes(input) || notetxt.includes(input)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })
})