let nav = document.querySelector(".nav");
let main = document.querySelector(".main");
let span = document.querySelector('.main .span');
let start = document.querySelector(".start");
let leftDirection = document.querySelector(".left");
let rightDirection = document.querySelector(".right");
let mainimgs = document.querySelector(".pop-imgs");
let imgs = document.querySelectorAll(".pop-imgs .f-img img");
let midSection= document.querySelector(".mid-sec");
let intro = document.querySelector(".intro");
let popularimgs = document.querySelectorAll(".f-img");
let section = document.querySelector(".section");
let topSecImg = document.querySelectorAll(".top-sec img");
let arrayOfPopularImg = Array.from(popularimgs);
let current1 = 0;
let faCaretUp = document.querySelectorAll(".fa-caret-up");
let artical = document.querySelectorAll(".artical");
let arrayArticals = Array.from(artical);
let valueImg = document.querySelector(".value-img img");
let value = document.querySelector(".value");
let contact = document.querySelector(".contact");
let  getStarted = document.querySelector(".get-started");
let footer = document.querySelector(".footer");
let homeLogo = document.querySelector(".logo");
let lightMood = document.querySelector(".fa-moon");
let darkMood = document.querySelector(".fa-dark");
let accessSec = document.querySelectorAll(".abbre ul li");
let ulStyleColor = document.querySelectorAll(".abbre ul");
let mobileMedia = window.matchMedia("(max-width:600px)");
let bottons = document.querySelectorAll(".bottom");
let mobileAbrr = document.querySelectorAll(".abbr ul li i")
let desktopMedia = window.matchMedia("(min-width:769px)");
// console.log(mobileAbrr);
window.onload = ()=>{
    mobileAbrr[0].classList.add("active");
    arrayOfPopularImg[0].classList.add("active");
    leftDirection.style.background = "var(--border-color)";
    leftDirection.style.pointerEvents = "none";
    if (mobileMedia) {
        intro.style.marginTop = "200px";
    }else{
        intro.style.marginTop = "100px";
    }
    nav.style.top = "18px";
    ulStyleColor.forEach(li=>{
        li.style.color = "var(--text-color-1)"
    })
}
window.onscroll = function(){
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 705) {
            mobileAbrr.forEach((element,index,array)=>{
            array[index].classList.remove("active");
        })
            mobileAbrr[1].classList.add("active");
        }
    if (window.pageYOffset >= 128) {
            topSecImg.forEach(img=>{
            img.style.maxWidth = "150px";
        })
    }
    if (window.pageYOffset >=534 ) {
            mainimgs.style.marginTop = '30px';
            imgs.forEach((img)=>{
            if (mobileMedia) {
                img.style.maxWidth = "280px";
                img.style.opacity = "1";
            }else{
                img.style.maxWidth = "220px";
                img.style.opacity = "1";
            }
        })
    }
    if (window.pageYOffset >= 950) {
        valueImg.style.marginRight = "0";
        valueImg.style.opacity = "1";
        value.style.opacity = "1";
    }
    if (window.pageYOffset >= 2424) {
        getStarted.style.marginTop = "100px";
        getStarted.style.opacity = "1";
        if (desktopMedia) {
            footer.style.marginTop= "100px";
            footer.style.opacity ="1";
        }
    }
    if (window.pageYOffset >= 1600) {
        mobileAbrr.forEach((element,index,array)=>{
        array[index].classList.remove("active");
        })
        mobileAbrr[2].classList.add("active");
        contact.style.marginRight= "0";
    }
    if (window.pageYOffset >= 2685) {
        footer.style.marginTop= "100px";
        footer.style.opacity ="1";
    }
        span.style.background = "var(--body-color)";
        span.style.borderBottom = "1px solid var(--text-color-light)";
        ulStyleColor.forEach(li=>{
            li.style.color = "var(--text-color)"
        })
        start.style.display = "block";
    if (window.scrollY == 0) {
        mobileAbrr.forEach((element,index,array)=>{
        array[index].classList.remove("active");
        })
        mobileAbrr[0].classList.add("active");
        start.style.display = "none";
        span.style.borderBottom = "none";
        span.style.background = "transparent";
        ulStyleColor.forEach(li=>{
        li.style.color = "var(--text-color-1)"
        })
    }
    if (window.pageYOffset>=2500) {
        mobileAbrr.forEach((element,index,array)=>{
        array[index].classList.remove("active");
        })
        mobileAbrr[3].classList.add("active");
    }
}
///
start.onclick = ()=>{
    main.scrollIntoView({
        behavior : 'smooth'
    })
    
};
/////
rightDirection.addEventListener ("click",(e)=>{
    leftDirection.style.background = "var(--body-color)";
    leftDirection.style.pointerEvents = "visible";
    if (arrayOfPopularImg[3].classList.contains("active")) {
        rightDirection.style.background = "var(--border-color)";
        rightDirection.style.pointerEvents = "none";
    };
    if (arrayOfPopularImg.length == 2) {
        // rightDirection.style.pointerEvents = "none";
        rightDirection.style.background = "var(--border-color)";
    }
    if (arrayOfPopularImg[current1].classList.contains("active")) {
        arrayOfPopularImg[current1].classList.remove("active");
        arrayOfPopularImg[current1].nextElementSibling.classList.add("active");
        current1 += 1;
    }else{
        arrayOfPopularImg[0].classList.add("active");
    }
    if (mobileMedia) {
        mainimgs.scrollBy({
            top : 0,
            left : 390,
            behavior : "smooth"
        })
        }
})

leftDirection.addEventListener("click", (e)=>{
    if (arrayOfPopularImg[1].classList.contains("active")) {
        leftDirection.style.pointerEvents = "none";
        leftDirection.style.background = "var(--border-color)";
    };
    if (arrayOfPopularImg[4].classList.contains("active")) {
        rightDirection.style.pointerEvents = "visible";
        rightDirection.style.background = "var(--body-color)";
    };
    // console.log(arrayOfPopularImg2[4].classList());
    if (arrayOfPopularImg[current1].classList.contains("active")) {
        arrayOfPopularImg[current1].classList.remove("active");
        arrayOfPopularImg[current1].previousElementSibling.classList.add("active");
        current1 -=1 ;
    }
    if (mobileMedia) {
        mainimgs.scrollBy({
            top : 0,
            left : -390,
            behavior : "smooth"
        })
        }

})
    //////
faCaretUp.forEach(up=>{
up.addEventListener("click",(e)=>{
        if (up.className=="fa-solid fa-caret-up") {
            for(let i=0; i<arrayArticals.length; i++){
                if (arrayArticals[i].childNodes[3] == undefined) {
                    //no action needed
                }else if(arrayArticals[i].childNodes[3].className=="abbr"){
                    arrayArticals[i].childNodes[3].remove();
                    arrayArticals[i].childNodes[1].childNodes[3].className = "fa-solid fa-caret-up";
                }
            }
            let abbr = document.createElement("dive");
            abbr.className = "abbr";
            let p = document.createElement("p");
            let txt = document.createTextNode("Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.")
            p.appendChild(txt);
            abbr.appendChild(p);
            e.target.parentElement.parentElement.appendChild(abbr);
            e.target.parentElement.parentElement.style.boxShadow = "0px 0px 10px var(--border-color)";
            e.target.className = "fa-solid fa-caret-down";
        }else{
            e.target.parentElement.parentElement.lastChild.remove();
            e.target.parentElement.parentElement.style.boxShadow = "none";
            e.target.className = "fa-solid fa-caret-up";
        }
})
})
/////
homeLogo.onclick = ()=>{
    document.querySelector(".main").scrollIntoView({ behavior : "smooth" })
    accessSec.forEach((element, index, array)=>{
        array[index].classList.remove("active");
    })
}
//////////////////////////////////////////////
accessSec.forEach(acc=>{
    acc.addEventListener("click",(e)=>{
        if (!e.target.classList.contains("fa-solid") && !e.target.classList.contains("fa-sun") && !e.target.classList.contains("logo")) {
            let data =acc.dataset.related;
            document.querySelector(`${data}`).scrollIntoView({
            behavior : "smooth"
            })
            accessSec.forEach((element, index, array)=>{
                array[index].classList.remove("active");
            });
            e.target.classList.add("active");
        }else if(e.target.classList.contains("fa-solid")){
            document.body.classList.toggle("dark-theme");
            e.target.className = "fa-regular fa-sun";
        }else if(e.target.classList.contains("fa-sun")){
            document.body.classList.toggle("dark-theme");
            e.target.className = "fa-solid fa-moon";
        }
        
    })
})
//////////////////////////////////////////////
bottons.forEach(but=>{
    but.addEventListener("click",(e)=>{
        bottons.forEach((element,index,array)=>{
            array[index].childNodes[1].classList.remove("active");
            array[index].classList.remove("active");
        })
        e.target.classList.add("active");
        but.classList.add("active")
    })
});
/////////
document.addEventListener("click",(e)=>{
    if (window.getComputedStyle(e.target).backgroundColor== "rgba(0, 0, 0, 0)") {
        bottons.forEach((element,index,array)=>{
            array[index].childNodes[1].classList.remove("active");
            array[index].classList.remove("active");
        })
        ///////
    }
})
/////
mobileAbrr.forEach(ab=>{
    ab.addEventListener("click",(e)=>{
        mobileAbrr.forEach((element,index,array)=>{
            array[index].classList.remove("active");
        })
        e.target.classList.add("active");
        ////////
        let data =ab.dataset.related;
        document.querySelector(`${data}`).scrollIntoView({
        behavior : "smooth"
        })
    });
    ////
})
/////////////
