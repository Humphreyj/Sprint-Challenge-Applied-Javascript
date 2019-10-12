// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let subArr = [];
let articlesData;
const cardsContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        
        articlesData = res.data.articles;
        console.log(articlesData.javascript);
        
        const entries = Object.entries(articlesData);

        
        entries.forEach(item => {
            item.shift();
            item.forEach(thing => {
                console.log(thing);
                thing.forEach(innerThing => {
                    console.log(cardMaker(innerThing));
                    cardsContainer.appendChild(cardMaker(innerThing));
                })
            })
        })
        
        

    })

function cardMaker(data) {
    const card = document.createElement('div');
    card.classList.add('card');
    //div headline//
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;
    card.appendChild(headline);
    //div headline//

    //DIV AUTHOR//
    const author = document.createElement('div');
    author.classList.add('author');
        //IMG DIV
       imgDiv = document.createElement('div');
       imgDiv.classList.add('img-container');
        
       author.appendChild(imgDiv);
        //IMG DIV
        // //IMG
        const img = document.createElement('img');
        img.src = data.authorPhoto;
        imgDiv.appendChild(img);
        // //IMG
        //NAME SPAN
        nameSpan = document.createElement('span');
        nameSpan.textContent = data.authorName;
        author.appendChild(nameSpan)
        //NAME SPAN
    card.appendChild(author);
    //DIV AUTHOR//

    // console.log(card);
    return card;
}


