 const nav = document.querySelector("ul.links");
 const menuBtn = document.querySelector("#menu");

 const modal = document.querySelector(".modal");
 const subsbtn = document.querySelector(".subsbtn");
 const contbtn = document.querySelector(".contbtn");
 const subscribeForm = document.querySelector(".subscribe-form");
 const contactForm = document.querySelector(".contact-form");
 const exit = document.querySelector(".exit");

 

function menu(){
    if (menuBtn.checked==true){
        nav.style.left="0px";
        // nav.style.height='calc(100vh - 110px)';
    }else{
        nav.style.left="-100vw";
        // nav.style.height='calc(100vh + 110px)';
    }
}
function showModal(){
    modal.style.display="flex";
}
function hideModal(){
    modal.style.display="none";
}
function contactFrm(){
    subsbtn.classList.add("tab-active");
    contbtn.classList.remove("tab-active");
    subscribeForm.style.display="none";
    contactForm.style.display="flex";
}
function subsFrm(){
    subsbtn.classList.remove("tab-active");
    contbtn.classList.add("tab-active");
    subscribeForm.style.display="flex";
    contactForm.style.display="none";
}
contbtn.addEventListener('click', contactFrm);
subsbtn.addEventListener('click', subsFrm);




