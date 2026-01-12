
//  selecteer de articles als element, 
let uitklapknop = document.querySelectorAll('article');

/* hij loopt door alle buttons heen */
uitklapknop.forEach(function(buttons){
    /* als je klikt op een article gebeurt er een function */
buttons.addEventListener("click", function(){
        /* koppel een class toe aan het geselecteerde element*/
    buttons.classList.toggle("uitgeklapt")
    })
})