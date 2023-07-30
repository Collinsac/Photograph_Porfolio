const btn =document.getElementById('icon-menu');
const menu =document.getElementById('div');

btn.addEventListener('click', ()=> {

    if(menu.style.display=="none"){

        menu.style.display="block";

    }
    else{
        menu.style.display="none";
    }

})