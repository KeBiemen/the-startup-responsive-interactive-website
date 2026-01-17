
//  selecteer de articles als element, 
const uitKlapKnop = document.querySelectorAll('article');


/* hij loopt door alle buttons heen */
uitKlapKnop.forEach(function(buttons){
    
    /* als je klikt op een article gebeurt er een function */
buttons.addEventListener("click", function(){
        /* koppel een class toe aan het geselecteerde element*/
    buttons.classList.toggle("uitgeklapt")
    })


})




