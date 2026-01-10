let uitklapknop = document.querySelectorAll('article');

/* hij loopt door alle buttons heen */
uitklapknop.forEach(function(buttons){
    /* als iemand op een van de like buttons clickt gebeurt er een function */
buttons.addEventListener("click", function(){
        /* function is togglen met voor alle classes met fill*/
    buttons.classList.toggle("uitgeklapt")
    })
})