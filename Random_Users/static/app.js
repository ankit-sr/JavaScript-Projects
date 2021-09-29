console.log('This is random people info generator');

const user_cont = document.getElementById('user-cont');
const user_name = document.getElementById('name');
const dob = document.getElementById('dob');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const address = document.getElementById('address');
const image = document.querySelector('#user-img img')

console.log(image.src);
function show_user(data){
    user = data.results[0]
    console.log(data);
    console.log(user);

    image.src = user.picture.large; 
    user_name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
    dob.innerText = `${user.dob.date.slice(0,10)}`;
    contact.innerText = `${user.phone}`;
    email.innerText = `${user.email}`;
    address.innerText = `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`
}

function fetch_user(){
    const url = 'https://randomuser.me/api/1.3/?nat=us,fr';

    fetch(url)
    .then(response => response.json())
    .then(data => show_user(data))
    .catch(error => console.log(error));
}

const next = document.getElementById('nextBtn');
next.addEventListener('click', fetch_user);