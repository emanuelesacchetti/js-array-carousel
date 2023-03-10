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
let minContainerDom = document.querySelector('.miniaturesContainer');

for ( let i = 0; i < imgList.length; i++) {
    const imageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imgList[i]}" alt="">
                        </div>`;
    
    carouselDom.innerHTML += imageWrapper;
    const miniatureDom = `<div class="miniature">
                                <img class="image" src="${imgList[i]}" alt="">
                        </div>`;
    minContainerDom.innerHTML += miniatureDom;
    
}

imagePosition = 0

let divImageWrapper = document.getElementsByClassName('image-wrapper');
divImageWrapper[imagePosition].classList.add('d-block');

let divMiniatureDom = document.getElementsByClassName('miniature');
divMiniatureDom[imagePosition].classList.add('fullOpacity');

const btnUpDom = document.querySelector('#up');
const btnDownDom = document.querySelector('#down');

btnDownDom.addEventListener('click',                         //A SALIRE
    function () {
        if(imagePosition < divImageWrapper.length - 1){     //dalla 1° alla penultima img
            divImageWrapper[imagePosition].classList.remove('d-block');
            divMiniatureDom[imagePosition].classList.remove('fullOpacity');
            //posizione x nella lista dei wrapper
            imagePosition++;
            //aggiungo 1
            divImageWrapper[imagePosition].classList.add('d-block');
            divMiniatureDom[imagePosition].classList.add('fullOpacity');
            btnDownDom.classList.remove('hide');
            //posizione x+1

        } else if(imagePosition = divImageWrapper.length - 1){                //ultima posizione
            divImageWrapper[imagePosition].classList.remove('d-block');
            divMiniatureDom[imagePosition].classList.remove('fullOpacity');
            //ultima posizione nella lista dei wrapper
            imagePosition = 0
            //posizione dell x uguale alla penultima posizone della lista wrapper
            divImageWrapper[imagePosition].classList.add('d-block');
            divMiniatureDom[imagePosition].classList.add('fullOpacity');
            //penultima posizione nella lista dei wrapper

            
        }

    }

)
btnUpDom.addEventListener('click',                  //A SCENDERE
    function () {
        
        
        if(imagePosition > 0){                   //dalla seconda all'ultima
            divImageWrapper[imagePosition].classList.remove('d-block');
            divMiniatureDom[imagePosition].classList.remove('fullOpacity');
            //posizione x nella lista dei wrapper
            imagePosition--;
            // -1
            divImageWrapper[imagePosition].classList.add('d-block');
            divMiniatureDom[imagePosition].classList.add('fullOpacity');
            btnUpDom.classList.remove('hide');
            //posizione x-1

            
        } else if(imagePosition == 0){                //la 1°
            divImageWrapper[imagePosition].classList.remove('d-block');
            divMiniatureDom[imagePosition].classList.remove('fullOpacity');
            //posizione x nella lista dei wrapper
            imagePosition = divImageWrapper.length - 1
            //posizione dell x uguale all'ultima posizone della lista wrapper
            divImageWrapper[imagePosition].classList.add('d-block');
            divMiniatureDom[imagePosition].classList.add('fullOpacity');
            //ultima posizione nella lista dei wrapper

            
        }
    }

)

console.log(divMiniatureDom);

/*miniatureDom.addEventListener('click',
    function () {
        
        divImageWrapper[divMiniatureDom[imagePosition]].classList.add('d-none')

    }
)*/