let caruselImge = document.querySelector('.carusel__imge')
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

let img = document.querySelectorAll('.carusel__imge img');

let indx = 0;

console.log(img);

function cecBtn1() {
    indx ++ ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1240}px)`;
}

function cecBtn2() {
    indx -- ;
    if(indx > img.length-1){
        indx = 0;
    }else if(indx < 0){
        indx = img.length-1;
    }
    caruselImge.style.transform = `translateX(${-indx * 1240}px)`;
}