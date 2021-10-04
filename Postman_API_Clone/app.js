console.log('This is a postman clone');

const form = document.getElementById('inputForm');

const postRequestInput = document.getElementById('postRequestInputDiv');

postRequestInput.style.display = 'none';

// Hide/Show Request Type
const requestGet = document.getElementById('req-get');
const requestPost = document.getElementById('req-post');

requestPost.addEventListener('click', ()=> {
    postRequestInput.style.display = 'block';
})

requestGet.addEventListener('click', ()=> {
    postRequestInput.style.display = 'none';
})

// Hide/Show Content Type
const jsonRequest = document.getElementById('jsonRequest');
const customRequest = document.getElementById('customRequest');

const contentJSON = document.getElementById('content-json');
const contentCustom = document.getElementById('content-custom');

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
function formSubmit(e){
    console.log('form submitted');
    // e.preventDefault();
    form.reset();
}

const submitBtn = document.getElementById('submitBtn');
submitBtn .addEventListener('click', formSubmit);

// Populating the custom parameters 
addCustomBtn = document.getElementById('addCustomBtn')
addCustomBtn = document.addEventListener('click', addCustomParameters);

function addCustomParameters(){
    console.log('clicked addCustomBtn');
    let html = document.getElementById('customRequest').innerHTML;
    console.log(html);
    html += `
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="parameters">Parameter</label>
                    <div class="col-sm-3">
                    <input type="text" class="form-control custom-key" placeholder="Key" aria-label="Key" required>
                    </div>
                    <div class="col-sm-3">
                    <input type="text" class="form-control custom-value" placeholder="Value" aria-label="Value" required>
                    </div>
                    <div class="col-sm-1">
                        <button class="btn-sm btn-primary" id="addCustomBtn">+</button>
                    </div>
                </div>
            `
    console.log(html);
    document.getElementById('customRequest').innerHTML = html;

}