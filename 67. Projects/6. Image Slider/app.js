let flage = 0;

// this function will incrase the value again and again 
function controller(x){
    flage=flage+x;
    slideshow(flage);
}

// this function will change the images every time when user click on next or previous button
function slideshow(num){
    let slides=document.getElementsByClassName('slide');

    if(num==slides.length){
        flage=0;
        num=0;
    }

    if(num<0){
        flage=slides.length-1;
        num=slides.length-1;

    }

    for(let x of slides){
        x.style.display='none';
    }
    slides[num].style.display='block';
}

slideshow(flage);