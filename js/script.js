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
    "AliceBlue",
    "Aqua",
    "Aquamarine",
    "CadetBlue",
    "Chartreuse",
    "Coral",
    "CornflowerBlue",
    "DarkBlue",
    "DarkCyan",
    "DarkGreen",
    "DarkKhaki",
    "DarkOliveGreen",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkTurquoise",
    "DeepSkyBlue",
    "DodgerBlue",
    "ForestGreen",
    "Green",
    "GreenYellow",
    "Khaki",
    "LawnGreen",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGreen",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSteelBlue",
    "LimeGreen",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MidnightBlue",
    "OliveDrab",
    "PaleGreen",
    "PaleTurquoise",
    "PowderBlue",   
    "SeaGreen",
    "SeaShell",
    "SkyBlue",
    "SlateBlue",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "YellowGreen",
  ];