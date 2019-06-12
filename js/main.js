const baseUrl = 'https://db.ygoprodeck.com/api/v3/cardinfo.php';

const filterType = document.querySelector('.filterType');
const filterAttribute = document.querySelector('.filterAttribute');
const filterLevel = document.querySelector('.filterLevel');
const filterRace = document.querySelector('.filterRace');

const filterBtn = document.querySelector('#filterBtn');
const displayCard = document.querySelector('.displayCard');
const resultCard = document.querySelector('.resultDisplay')



var type = [];
var race = [];
var attribute = [];
var level = [];
var newType= [];

const distinct = (value, index, self) => { 
    return self.indexOf(value) === index;
}


fetch(`${baseUrl}`)
    .then(response => response.json()) 
    .then(function(card) {
        card = card[0];
        getType([...card]);
        getAttribute([...card]);
        getLevel([...card]);
        getRace([...card]);
        filterGet([...card])
    })



//start of getType
function getType(cardArr){
        cardArr.map(card => {
                type.push(card.type);
        })
        displayType([...type]);  
}
function displayType(cardArr){

    let filterList = cardArr.filter(distinct).map(type => {
        return `<option value="${type}">${type}</option>`;
    }).join('')
    filterType.innerHTML = filterList;
}
//end of getType





//start of getAttribute
function getAttribute(cardArr){
    cardArr.map(card => {
            attribute.push(card.attribute);
    })
    displayAttribute([...attribute]);  
}
function displayAttribute(cardArr){
    let filterList = cardArr.filter(distinct).map(attribute => {
            return `<option value="${attribute}">${attribute}</option>`;
    }).join('')
    filterAttribute.innerHTML = filterList;
}
//end of getAttribute



//start of getLevel
function getLevel(cardArr){
    cardArr.map(card => {
            level.push(card.level);
    })
    displayLevel([...level]);  
}
function displayLevel(cardArr){
    let filterList = cardArr.filter(distinct).map(level => {
            return `<option value="${level}">${level}</option>`;
    }).join('')
    filterLevel.innerHTML = filterList;
}
//end of getLevel



//start of getRace
function getRace(cardArr){
    cardArr.map(card => {
            race.push(card.race);
    })
    displayRace([...race]);  
}
function displayRace(cardArr){
    let filterList = cardArr.filter(distinct).map(race => {
            return `<option value="${race}">${race}</option>`;
    }).join('')
    filterRace.innerHTML = filterList;
}
//end of getRace



//start of display Filtered Cards
function filterGet(cardArr){
    filterBtn.addEventListener('click', function() {
        let cardFilter = cardArr.map(card => {
            if(filterType.value === card.type && filterAttribute.value === card.attribute &&    filterLevel.value === card.level && filterRace.value === card.race){
                return `<div class="displayedCard" id="${card.id}" ><img id="displayedCardResult" src="${card.image_url}" height="180px" name="${card.id}"/></div>`
           }else{
               document.querySelector('.displayCardError').innerHTML = `<div   class="displayedCardError"><h1>NO YUGIOH CARD FOUND!</h1></div>`;

           }
           
       }).join('')
       if(cardFilter){
          displayCard.innerHTML = cardFilter;
          document.querySelector('.displayCardError').style.display = 'none';
      }else{
          displayCard.innerHTML = cardFilter;
          document.querySelector('.displayCardError').style.display = 'block'
      }
      displayCardResult(cardArr);
    }) 
}
//end of display Filtered Cards


function displayCardResult(cardArr) {
    
    document.querySelectorAll('.displayedCard').forEach(function(event){
        event.addEventListener('click', function() {
          getDisplayResult(this.id, cardArr)
        });
      });

}


function getDisplayResult(id, cardArr){
    
    let resultDisplay = cardArr.map(display => {
        if(id === display.id){
            return `<img src="${display.image_url}""/>`
        }
    }).join('')
    resultCard.innerHTML = resultDisplay;
    
}




















// //start of get type
// function getType(filterArr){
//     filterSelect.addEventListener('change', function() {

//         filterOutput.style.display = 'block'

//         if(filterSelect.value === 'type'){
//             console.log(filterSelect.value);
//             filterArr.map(name => {
//                 type.push(name.type);
//             })
//             displayType([...type]);  
//         }
        
//         displayCardType(filterArr);
//     })
    
// }

// function displayType(filterArr){

//     let filterList = filterArr.filter(distinct).map(name => {
//         if(name !== 0){
//         return `<option>${name}</option>`;
//     }
//     })
//     filterOutput.innerHTML = filterList;
// }
// //end of get type



// //start of get race
// function getRace(filterArr){
//     filterSelect.addEventListener('change', function() {

//         filterOutput.style.display = 'block'

//         if(filterSelect.value === 'race'){
//             console.log(filterSelect.value);
//             filterArr.map(name => {
//                 race.push(name.race);
//             })
//             displayRace([...race]);  
//         }
//         displayCardRace(filterArr);
//     })
// }

// function displayRace(filterArr){

//     let filterList = filterArr.filter(distinct).map(name => {
//         return `<option value="${name}">${name}</option>`;
//     }).join('')
//     filterOutput.innerHTML = filterList;
// }
// //end of get race


// //start of get attribute
// function getAttribute(filterArr){
//     filterSelect.addEventListener('change', function() {

//         filterOutput.style.display = 'block'

//         if(filterSelect.value === 'attribute'){
//             console.log(filterSelect.value);
//             filterArr.map(name => {
//                 attribute.push(name.attribute);
//             })
//             displayAttribute([...attribute]);  
//         }
//         displayCardAttribute(filterArr);
//     })
// }

// function displayAttribute(filterArr){

//     let filterList = filterArr.filter(distinct).map(name => {
//         return `<option value="${name}">${name}</option>`;
//     }).join('')
//     filterOutput.innerHTML = filterList;
// }
// //end of get attribute


// //start of get level
// function getLevel(filterArr){
//     filterSelect.addEventListener('change', function() {

//         filterOutput.style.display = 'block'

//         if(filterSelect.value === 'level'){
//             console.log(filterSelect.value);
//             filterArr.map(name => {
//                 level.push(name.level);
//             })
//             displayLevel([...level]);  
//         }
//         displayCardLevel(filterArr);
//     })
// }

// function displayLevel(filterArr){

//     let filterList = filterArr.filter(distinct).map(name => {
//         return `<option value="${name}">${name}</option>`;
//     }).join('')
//     filterOutput.innerHTML = filterList;
// }
// //end of get level











// function displayCardType(filterArr){
//     searchBtn.addEventListener('click', function() {
//         let cardType = filterArr.map(card => {
//             if(filterOutput.value === card.type){
//                 console.log(card.image_url)
//                 return `<div class="displayedCard"><img src="${card.image_url}" height="150px"/></div>`
//             }
//         }).join('');
//         displayCard.innerHTML = cardType;
        
//     })
// }

// function displayCardRace(filterArr){
//     searchBtn.addEventListener('click', function() {
//         let cardType = filterArr.map(card => {
//             if(filterOutput.value === card.race){
//                 console.log(card.image_url)
//                 return `<div class="displayedCard"><img src="${card.image_url}" height="150px"/></div>`
//             }
//         }).join('');
//         displayCard.innerHTML = cardType;
        
//     })
// }

// function displayCardAttribute(filterArr){
//     searchBtn.addEventListener('click', function() {
//         let cardType = filterArr.map(card => {
//             if(filterOutput.value === card.attribute){
//                 console.log(card.image_url)
//                 return `<div class="displayedCard"><img src="${card.image_url}" height="150px"/></div>`
//             }
//         }).join('');
//         displayCard.innerHTML = cardType;
        
//     })
// }

// function displayCardLevel(filterArr){
//     searchBtn.addEventListener('click', function() {
//         let cardType = filterArr.map(card => {
//             if(filterOutput.value === card.level){
//                 console.log(card.image_url)
//                 return `<div class="displayedCard"><img src="${card.image_url}" height="150px"/></div>`
//             }
//         }).join('');
//         displayCard.innerHTML = cardType;
        
//     })
// }
