let url=[
    {
        "id":1,"url":"https://open.spotify.com/embed/playlist/1Z4qBwEOJtloMo3uss24yq"
    },
    {
        "id":2,"url":"https://open.spotify.com/embed/playlist/5LBUYwZPKzJ3iFznqozeg7"
    },
    {
        "id":3,"url":"https://open.spotify.com/embed/playlist/7xnvcsBhVW1WinOZ8TsC6V"
    },
    {
        "id":4,"url":"https://open.spotify.com/embed/playlist/4qtUzF0OwPdqo8iqQ1RQTt"
    },
    {
        "id":5,"url":"https://open.spotify.com/embed/playlist/3UpN4ScTzX9iFNqJ4vFcBA"
    },
    {
        "id":6,"url":"https://open.spotify.com/embed/playlist/02ep0U5vsdNXpriDZTX0jS"
    }
    
];

let playlist = document.querySelector('#iframe');
let query = new URLSearchParams(location.search);
let idPlaylist = query.get("id");

if (!query.has("id")){
    alert ("Você não selecionou uma opção e será redirecionado")
    location.href="index.html"
} else{
    let teste = url.filter(unico=>{
        return unico.id == idPlaylist;
    })
    console.log(teste)
    playlist.setAttribute("src", teste[0].url);
}
