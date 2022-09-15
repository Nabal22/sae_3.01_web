let card = document.getElementsByClassName("hiddenIcon");
let dem = document.getElementById("dem");

let hover = false;

dem.addEventListener('mouseenter',()=>{
    for (let i = 0; i < card.length; i++) {
        console.log(i);
        const element = card[i];
        element.classList.remove("hiddenIcon");
        element.classList.add("visibleIcon");
    }
});


// if (hover){
//     for (let i = 0; i < card.length -1; i++) {
//         const element = card[i];
//         console.log('vrai',element,i);
//         element.classList.remove("visibleIcon");
//         element.classList.add("hiddenIcon");
//     }
//     hover = false;
// }
// else{
//     for (let i = 0; i < card.length - 1; i++) {
//         const element = card[i];
//         console.log('faux',element,i);
//         element.classList.remove("hiddenIcon");
//         element.classList.add("visibleIcon");
//     }
//     hover = true;
// }