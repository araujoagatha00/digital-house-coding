const divResult = document.getElementById('divResult');
const url = 'https://www.vagalume.com.br/';

fetch(url + 'news/index.js')
    .then(async(response) => {
        return await response.json();
    })
    .then(async(response) => {
        let resposta = await response.news;
        console.log(resposta);
        resposta.forEach((element) => {
            const resposta = `
                <div class="card rounded mb-3 mr-2">
                   <img src="${url}${element.pic_src}" class="card-img-top">
                   <div class="card-body">
                    <h5 class="card-title">${element.headline}</h5>
                    <p class="card-text">${element.kicker}</p>
                    <a href="${element.url}" class="btn btn-outline-danger">${element.featured}</a>
                </div>
                </div>
            `;
            divResult.innerHTML += resposta;
        });
    });