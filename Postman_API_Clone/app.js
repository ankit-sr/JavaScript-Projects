console.log('This is a postman clone');

form = document.getElementById('inputForm');

postRequestInput = document.getElementById('postRequestInputDiv');

postRequestInput.style.display = 'none';

// Hide/Show Request Type
requestGet = document.getElementById('req-get');
requestPost = document.getElementById('req-post');

requestPost.addEventListener('click', ()=> {
    postRequestInput.style.display = 'block';
})

requestGet.addEventListener('click', ()=> {
    postRequestInput.style.display = 'none';
})

// Hide/Show Content Type
jsonRequest = document.getElementById('jsonRequest');
customRequest = document.getElementById('customRequest');

contentJSON = document.getElementById('content-json');
contentCustom = document.getElementById('content-custom');

customRequest.style.display = 'none';
contentJSON.addEventListener('click', ()=> {
    customRequest.style.display = 'none';
    jsonRequest.style.display = 'block';
})

contentCustom.addEventListener('click', ()=> {
    customRequest.style.display = 'block';
    jsonRequest.style.display = 'none';
})

// function to call when form is submitted
const formSubmit = (e) => {
    e.prevenDefault();
}

form.addEventListener('submit', formSubmit());