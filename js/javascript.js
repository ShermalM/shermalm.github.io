const button = document.querySelector("#back-to-top-button");

window.addEventListener("scroll", scrollFunction);

button.addEventListener("click", backToTop);


//Functions
function scrollFunction(){
    if(window.pageYOffset > 0){
        if(!button.classList.contains("btnEntrance")){
            button.classList.remove("btnExit");
            button.classList.add("btnEntrance");
            button.style.display = "block";
        }
    } else{
        if(!button.classList.contains("btnExit")){
            button.classList.remove("btnEntrance");
            button.classList.add("btnExit");
            setTimeout(function(){
                button.style.display = "none";
            }, 250);
            
        }
    }
}

function backToTop(){
    window.scrollTo(0,0);
}
