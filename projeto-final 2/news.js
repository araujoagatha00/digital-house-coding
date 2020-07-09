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
                <div>
                    <img src="${url}${element.pic_src}">
                    <p>${element.headline}</p>
                    <p>${element.kicker}</p>
                    <p>${element.featured}</p>
                    <p>${element.url}</p>
                </div>
            `;
            divResult.innerHTML += resposta;
        });
    });