const xtras = document.querySelectorAll(".homefetch")
const buttons = document.querySelectorAll(".news-section")


console.log(xtras)
for(let i = 0; i < xtras.length; i++){
    xtras[i].style.display = "none"
}

for(let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener("click", showHide)
}

// showhide er .knap pga buttons har en eventlistener og buttons=.knap
function showHide(){
    
    // så .knaps sidste element får en funktion
    let txt= this.nextElementSibling
    console.log(txt)
 
 //knap har display block i media queries
    if  (txt.style.display == "none")
    {

        //pga knap har display block i media queries så får knaps sidste element(texten) automatisk display none altså texten er IKKE vist
     txt.style.display ="block" // skjult text (den har display none )
    
       
   //Vis .knap bliver klikket får den display block og texten bliver vist og knappens text ændre sig til "læs mindre"
     }else{
       txt.style.display = "none" //VIST text
    

    }
}
module.exports= {showHide}