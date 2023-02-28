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

const carouselDom = document.querySelector('#carousel');
let imageDom = document.querySelectorAll('.image');

for ( let i = 0; i < imgList.length; i++) {
    const imageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imgList[i]}" alt="">
                        </div>`;
    
    carouselDom.innerHTML += imageWrapper;
    
    
}

imagePosition = 0

let divImageWrapper = document.getElementsByClassName('image-wrapper');
divImageWrapper[imagePosition].classList.add('d-block');

const btnUpDom = document.querySelector('#up');
const btnDownDom = document.querySelector('#down');


btnUpDom.addEventListener('click', 
    function () {
        if(imagePosition < imgList.length - 1){
            divImageWrapper[imagePosition].classList.remove('d-block');
            
            imagePosition++;

            divImageWrapper[imagePosition].classList.add('d-block');

            btnDownDom.classList.remove('hide');

            if(imagePosition == divImageWrapper.length -1){
                btnUpDom.classList.add('hide');
            }
        }

    }

)
btnDownDom.addEventListener('click', 
    function () {
        if(imagePosition > 0){
            divImageWrapper[imagePosition].classList.remove('d-block');
            imagePosition--;
            divImageWrapper[imagePosition].classList.add('d-block');

            btnUpDom.classList.remove('hide');

            if(imagePosition == 0) {
                btnDownDom.classList.add('hide');
            }
        }
    }

)