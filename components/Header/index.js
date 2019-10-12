// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let temp = 98;

function HeaderMaker() {
    const header = document.createElement('div');
    header.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('span');
    dateSpan.textContent = 'SMARCH 28, 2019'

    const title = document.createElement('h1');
    title.textContent = 'Lambda Times';

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.innerHTML = `${temp} &deg;`

    header.appendChild(dateSpan);
    header.appendChild(dateSpan);
    header.appendChild(title);
    header.appendChild(tempSpan);

    console.log(header);
    return header;

}
const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(HeaderMaker());
HeaderMaker()
