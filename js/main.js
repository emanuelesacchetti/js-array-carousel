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


btnUpDom.addEventListener('click',                         //A SALIRE
    function () {
        if(imagePosition < divImageWrapper.length - 1){     //dalla 1° alla penultima img
            divImageWrapper[imagePosition].classList.remove('d-block');
            //posizione x nella lista dei wrapper
            imagePosition++;
            //aggiungo 1
            divImageWrapper[imagePosition].classList.add('d-block');
            //posizione x+1
            btnDownDom.classList.remove('hide');

        } else if(imagePosition = divImageWrapper.length - 1){                //ultima posizione
            divImageWrapper[imagePosition].classList.remove('d-block');
            //ultima posizione nella lista dei wrapper
            imagePosition = 0
            //posizione dell x uguale alla penultima posizone della lista wrapper
            divImageWrapper[imagePosition].classList.add('d-block');
            //penultima posizione nella lista dei wrapper

            
        }

    }

)
btnDownDom.addEventListener('click',                  //A SCENDERE
    function () {
        
        
        if(imagePosition > 0){                   //dalla seconda all'ultima
            divImageWrapper[imagePosition].classList.remove('d-block');
            //posizione x nella lista dei wrapper
            imagePosition--;
            // -1
            divImageWrapper[imagePosition].classList.add('d-block');
            //posizione x-1

            btnUpDom.classList.remove('hide');

            
        } else if(imagePosition == 0){                //la 1°
            divImageWrapper[imagePosition].classList.remove('d-block');
            //posizione x nella lista dei wrapper
            imagePosition = divImageWrapper.length - 1
            //posizione dell x uguale all'ultima posizone della lista wrapper
            divImageWrapper[imagePosition].classList.add('d-block');
            //ultima posizione nella lista dei wrapper

            
        }
    }

)