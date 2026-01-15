
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

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});