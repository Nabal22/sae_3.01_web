var numCard = -1;

function starto(){
    changeColorCard();
    chargeText();
}

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

function changeColorCard(){
    const cardCustom = document.getElementsByClassName('card-custom');

    /*cardCustom.style.backgroundColor = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];*/
    for (i = 0; i < cardCustom.length; i++) {

        cardCustom[i].style.backgroundColor = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];

      } 
}

function chargeText(){
    const cardCustom = document.getElementsByClassName('card-custom');
    const cardText = document.getElementsByTagName('h4');
    const cardLittleText = document.getElementsByTagName('p');


    /*cardCustom.style.backgroundColor = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];*/
    for (i = 0; i < cardCustom.length; i++) {

        var nb = Math.floor(Math.random()*Object.keys(banque).length);
        cardText[i].innerHTML = banque[nb].Titre;
        cardLittleText[i].innerHTML = banque[nb].Synopsis;

      } 

}

const banque = [
    {
        "Titre": "Anase",
        "Synopsis" : "Une histoire effrayante",
        
    },
    {
        "Titre": "Alban",
        "Synopsis" : "Une histoire joyeuse",
        

    },
    {
        "Titre": "Marion",
        "Synopsis" : "Une histoire bizarre",

    }
];

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