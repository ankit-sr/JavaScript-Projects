console.log('quick news js');

const country = 'in';
const apikey = '839b1a402b7c47a288a40861fe2ff740';
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apikey=${apikey}`;

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

const row = document.querySelector('.row');


xhr.onload = function(){
     if(this.status === 200){
            let newsObj = JSON.parse(this.responseText);
            let articles = newsObj.articles;
            console.log(articles);
            let html = '';
            articles.forEach(function(element){
                if(element.title != null && element.desc != null || element.urlToImage != null){
                    html += `
                        <div class=" news-card" >
                            <h5 class="news-heading my-2 mx-2" id="news-heading">${element.title}</h4>
                            <span class="news-desc my-2 mx-2" id="news-desc">${element.description}
                            <a href="${element.url}" target="_blank">Read more ...</a>
                            </span>
                        </div>
                    `
                }
            });
            row.innerHTML = html;
            
            let newscard = document.getElementsByClassName('news-card');
            Array.from(newscard).forEach(function(element, index){
                element.style.backgroundImage = `url(${articles[index].urlToImage})`;
            });

        }
}

xhr.send();

searchForm = document.getElementById('search-form');
console.log(searchForm);
searchForm.addEventListener('submit',function(){
    searchForm.preventDefault();
    let searchedValue = searchForm['search'].value.toLowerCase();

    let newscard = document.getElementsByClassName('news-card');
    Array.from(newscard).forEach(function(element){
        let title = element.getElementById('news-heading').innerText.toLowerCase();
        let desc = element.getElementById('news-desc').innerText.toLowerCase();

        if(title.includes(searchedValue) || desc.includes(searchedValue))
        {
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });

})