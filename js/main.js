//creo un array con gli url delle immagini
//creo un riferimento al carousel
//creo un ciclo for per inserire nel carousel la sintassi del wrapper in literal

let imgList = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const carouselDom = document.getElementsByClassName('carousel');
let imageWrapper = '';

for ( let i = 0; i < imgList.length; i++) {
    const imageWrapper = `<div class="image-wrapper">
                                <img src="${imgList[i]}" alt="">
                        </div>`;

    
    console.log(imageWrapper);
}
carouselDom.innerHTML += imageWrapper;
