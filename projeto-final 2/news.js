const divResult = document.getElementById('divResult');

fetch('https://www.vagalume.com.br/news/index.js')
    .then(async response => {
        return await response.json();
    })
    .then(async response => {
        let resposta = await response.news;
        resposta.forEach( element => {
            const resposta = `
                <div>
                    <img src="${element.images}">
                    <p>${element.headline}</p>
                    <p>${element.kicker}</p>
                    <p>${element.featured}</p>
                    <p>${element.url}</p>
                </div>
            `;
            divResult.innerHTML += resposta;
    })
});

