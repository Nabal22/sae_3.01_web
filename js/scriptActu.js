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

        var b = document.getElementsByTagName('button')[nb];
        b.style.visibility = "visible";
            
}

function hideText(nb){
    var p = document.getElementsByTagName('p')[nb];
    p.style.visibility = "hidden";  

    var b = document.getElementsByTagName('button')[nb];
    b.style.visibility = "hidden";
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
        "Titre": "Coupure dans la distribution d'eau à Baillif",
        "Synopsis" : "Suite à une rupture de canalisation la distribution de l'eau sera interrompue le samedi 27 février 2016 sur la commune de baillif et particulièrement dans les secteurs de CADET, BOURG, Cité CHAULET de 7h à 18h. madame le Président vous prie de bien l'excuser pour la gêne occasionnée.",
        
    },
    {
        "Titre": "Mise à disposition de l'agence en ligne",
        "Synopsis" : "L'agence est désormais disponible sur le site : portail-web",
        

    },
    {
        "Titre": "Bienvenus sur votre nouveau portail web",
        "Synopsis" : "Chers abonnés, chères abonnées, \n Toute l'équipe de la Communauté d'Agglomération du Sud Basse-Terre est heureuse de vous accueillir sur votre tout nouveau portail web.\nAprès avoir créé votre espace abonné, quelques clics suffiront pour :\nSuivre vos consommations\nGérer vos abonnements\nTélécharger et payer vos factures en ligne\nGérer vos moyens de paiement\nSignaler un déménagement\nEffectuer des demandes d'intervention\nEntrer en contact avec votre service clientèle\nPour créer votre espace abonné, munissez-vous simplement de votre dernière facture, cliquez sur le lien 'Pas encore de compte' et laissez-vous guider.\n\nBonne navigation.\n\nTrès cordialement,\nLa CASBT",

    },
    {
        "Titre": "COMMUNIQUE DE PRESSE",
        "Synopsis" : "Le mardi 2 juin 2015, le conseil communautaire de la Communauté d’Agglomération Grand Sud Caraïbes (CASBT) s’est réuni en plénière. Vingt-trois points étaient à l’ordre du jour. L’ensemble des conseillers communautaires présents ont voté un certain nombre de mesures importantes, entre autre : \n- Le lancement d’un projet de territoire visant à promouvoir le développement économique autour de la diversité et des richesses patrimoniales du sud Basse-Terre. \n- Une motion à présenter à l’Etat pour reconnaître l’état de catastrophe naturelle au regard des conséquences sanitaires, économiques (tourisme, pêche…) et écologiques provoquées par les sargasses afin de permettre notamment aux sinistrés d’être",

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