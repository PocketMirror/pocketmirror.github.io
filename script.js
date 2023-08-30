// Colocar aqui músicas novas copiando desde uma chave para a outra com a virgula no final e alterar os dados
const musics = [
{
    Name: "KITTEN",
    Img: 'kitten.jpg',
    Link: "https://youtu.be/acpiNz0mx8E"
},
{
    Name: "Winter Night",
    Img: 'winter.jpg',
    Link: "https://youtu.be/erYZAS5brLg?list=OLAK5uy_kS8FXUWYbwOzkl54I9ouW0Wm2Lz0ApH2Q"
},
]


musics.forEach((music)=> {
    console.log('loading musics')
    const div = document.createElement('a');
    const img = document.createElement('img');
    const name = document.createElement('h2');

    div.classList.add('music')
    div.href = music.Link
    img.src = `/assets/${music.Img}`
    name.innerHTML = music.Name
    div.target = '_blank'

    div.appendChild(img)
    div.appendChild(name)
    console.log('injecting musics')
    document.getElementById('musicas').appendChild(div)
    console.log('musics loaded')
}
)

function button() {
    const menu = document.getElementById('menu')

    menu.classList.toggle('menu')
    menu.classList.toggle('hiden')
 }

const images = []
let i = 0
let exist = true;
    while (exist == true) {
        fetch(`./assets/photos/${i}.jpg`)
            .then(response => {
                if (response.ok) {
                    console.log(i)
                    i++;
                }else {
                    exist = false;
                }
            })
    
    } 
console.log(images)