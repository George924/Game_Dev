
let numere = [3, 4, 9];
numere.push(7);
console.log(numere);
numere[numere.length] = 13;
console.log(numere);
// 3, 4, 9 ,7, 13
numere.splice(3, 0, 14);
console.log(numere);


let cardTypes = ['clubs', 'diamonds', 'hearts','spades'];
let pachet = {
    'clubs': [], //
    'diamonds':[],
    'hearts': [],
    'spades': []
};
let score = 0;
let vecheaCarte = 0;

function adaugaCartiInPachet(nrPachete = 1) {
    for (i = 0; i < cardTypes.length; i++)  { // index card type
        // i // index (0, 1, 2, 3)
        // cardTypes[i] // 'clubs', ...
        // masina['model'] 
        //masina.model == masina['model']
        //masina[model]
        
        pachet[cardTypes[i]]
     for ( let j = 2; j <= 14; j++) { // card number
        pachet[cardTypes[i]] [pachet[cardTypes[i]]]=j;

     }
    }
    console.log(pachet);
}


function incarcare() {

    
    adaugaCartiInPachet;
    // adaugare carte noua;
     nouaCarte = schimbaCarte();
     // ar urma comparatie ()
     vecheaCarte = nouaCarte;
    // setare scor zero
    afiseazaScor();
    //...
}
function afiseazaScor(){
    const divScore = document.getElementById('score');
   const spanScore = divScore.getElementsByTagName('span')[0];
   spanScore.textContent = score;
}
function showFace(happy) {
    const divIdToShow = 'face-' + (happy ? 'happy' : 'sad'); //short
    const divIdToHide = 'face-' + (!happy ? 'happy' : 'sad'); // short
    document.getElementById(divIdToShow).style.dusplay = 'block';
    document.getElementById(divIdToHide).style.dusplay = 'none';


}

function schimbaCarte() {
   const indexType =  Math.floor(Math.random() * 4); 
   const cardNumber = Math.floor(Math.random() * 13 + 2); // [0;14) * 13 =>  [0;13) + 2 => [2; 13) ; [2; 15)
   const pozitie = pachet[cardTypes[indexType]].indexOf(cardNumber);
   const fileName =  'cards/' + cardTypes[indexType] + '_' + cardNumber + '.svg';
   if (pozitie == -1) {
    console.log('Am obtinut ' + fileName + 'si nu e in pachet')
    schimbaCarte();
    return;
   }
   pachet[cardTypes[indexType]].splice(pozitie, 1);


   

   //lastCardNumber = cardNumber;
   
   console.log(fileName);
   const imgElement = document.querySelector('#card > img');

    imgElement.setAttribute('src' , fileName);
    //return cardNumber;
    
}
function higher() {
     nouaCarte = schimbaCarte();
     console.log(typeof nouaCarte);
    if (typeof nouaCarte !== 'number') return;
    if (nouaCarte >= vecheaCarte) {
        score++;
        showFace(true);
        afiseazaScor();

    } else {
        score--;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;

}

const lower = function() {
    
    nouaCarte =schimbaCarte();
    if (typeof nouaCarte !== 'number') return;
    if (nouaCarte <= vecheaCarte) {

    
        score++;
        showFace(true);
        afiseazaScor();

    } else {
        score--;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;



}


document.addEventListener('DOMContentLoaded', incarcare);