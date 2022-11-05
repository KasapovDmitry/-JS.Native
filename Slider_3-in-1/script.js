
let arLeft = document.querySelector('.arrow-left');
let arRight = document.querySelector('.arrow-right');
let slideIndex1 = 1;
let slideIndex2 = 2;
let slideIndex3 = 3;
listSlides(slideIndex1, slideIndex2, slideIndex3);

arLeft.onclick = () => {
    listSlides(slideIndex1 -= 1, slideIndex2 -= 1, slideIndex3 -= 1);
}
arRight.onclick = () => {
    listSlides(slideIndex1 += 1, slideIndex2 += 1, slideIndex3 += 1);
} 

function listSlides(n, t, r) {
    let imagesAll = document.querySelectorAll('.image-blok');
    if (n > imagesAll.length) {
        slideIndex1 = 1;
    }
    if (n < 1) {
        slideIndex1 = imagesAll.length;
    }   
    if (t > imagesAll.length) {
        slideIndex2 = 1;
    }
    if (t < 1) {
        slideIndex2 = imagesAll.length;
    }   
    if (r > imagesAll.length) {
        slideIndex3 = 1;
    }
    if (r < 1) {
        slideIndex3 = imagesAll.length;
    }
    
    imagesAll[0].src = './img/i' + slideIndex1 + '.jpg';
    imagesAll[1].src = './img/i' + slideIndex2 + '.jpg';
    imagesAll[2].src = './img/i' + slideIndex3 + '.jpg';
}


        
       





