var numCard = -1;

function showText(nb){
        if(nb!=numCard){
            
            changeColorCard(nb);
            numCard=nb;
        }
        var p = document.getElementsByTagName('p')[nb];
          p.style.visibility = "visible";
            
}

function hideText(nb){
    var p = document.getElementsByTagName('p')[nb];
    p.style.visibility = "hidden";  
}

function changeColorCard(nb){
    var cardCustom = document.getElementsByTagName('section');

    /*cardCustom.style.backgroundColor = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];*/
    for (i = 1; i < cardCustom.length; i++) {
        cardCustom[i].style.backgroundColor = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];
      } 

}

const CSS_COLOR_NAMES = [
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9844a",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#4d908e",
    "#577590",
    "#277da1"
  ];