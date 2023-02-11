const container = document.querySelector('.cards__container');

const cardsArray = [
    card1 = {
        id: 'card1',
        img: 'img/fungus.png',
        alt: 'Website built with HTML only.',
        description: 'This website was made mostly with HTML. A CSS stylesheet was created only to add colour to the titles',
        features: ['Basic HTML tags and properites', 'Creating a basic navigation bar', 'Use of HTML entities', 'Adding images to a page']
    },
    card2 = {
        id: 'card2',
        img: 'img/octopus.png',
        alt: 'One-page website with basic CSS added.',
        description: 'In contrast to the nearly 20-page fungus project, here I created one page with text and some pictures, where I attempted to use CSS to better design the page and move away from the wikipedia type of design.',
        features: ['Adding background colour and borders to titles', 'Aligning text', 'Floating content', 'Use of in-line block']
    },
    card3 = {
        id: 'card3',
        img: 'img/favourite-foods.png',
        alt: 'A simple project from an online course on HTML and CSS.',
        description: 'This project was created during a web development course I did with coursera&#8228org. It focuses on creating a more visually appealling site by dividing content in clear sections layed out across the page.',
        features: ['HTML tags: <code>header</code>, <code>section</code>, <code>footer</code>, <code>ul</code>, <code>progress</code>, <code>details</code>, <code>summary</code>', 'working with CSS hexadecimal colours, font sizes in pixels, padding, border, margin', 'Using HTML tags as CSS selectors', 'Adding colours and border to sections to differentiate content']
    },
    card4 = {
        id: 'card4',
        img: 'img/creating-lists.png',
        alt: 'copying the look of a website as a side challenge.',
        description: 'In this project I tried to see if I could make a page that looked just like one I found on the internet. It was definitely a good learning curve.',
        features: ['Using <code>flexbox</code> to display a column', 'Applying <code>linear-gradient</code> to a background colour', 'Use of toggle colour picker from the browser developer tools', 'Use of HTML <code>code</code> tag to define some computer code in a page']
    },
    card5 = {
        id: 'card5',
        img: 'img/transitions.png',
        alt: 'A side navigation bar with animations.',
        description: 'Here I made a navigation bar and tried to animate it with CSS transitions, using different properties and time durations.',
        features: ['Considering appropriate colour combinations', 'Use of CSS <code>:hover</code> selector', 'Applying CSS transition timing functions', 'Working with <code>webkit</code> CSS ']
    },
    card6 = {
        id: 'card6',
        img: 'img/morphic.png',
        alt: 'Recreating an existing website with a fixed navbar and dropdown menu',
        description: 'When searching for accessibility I came accross Morphic, an open source tool that makes computers easier to use. I liked the layout of the page so I tried to copy it here.',
        features: ['Trying to write cleaner code that is organised easier to understand', 'Use of BEM naming conventions  for CSS classes', 'Creating a menu that remains fixed as you scrool down a page', 'Creating a dropdown menu that appears as you hover over an item']
    },
    card7 = {
        id: 'card7',
        img: 'img/nike.png',
        alt: 'Nike mega-menu',
        description: 'This project involved re-creating a mega-menu found on the Nike website. This type of menus are usually found on online stores and large websites that have plenty of categories and subcategories.',
        features: ['Links that change colour on hover', 'Dropdown menu on hover', 'Use of <code>position:absolute/relative</code> and <code>z-index</code>', '<code>:first-child</code> and <code>:hover</code> CSS selectors']
    },
    card8 = {
        id: 'card8',
        img: 'img/recipes.png',
        alt: 'Multi-page project with home recipes',
        description: 'This is one of my favourite projects, partly because I actually use it to store my cooking recipes, but mostly because it was my first responsive website. It is a simple website with a clean an beautiful layout.',
        features: ['Mobile first approach', '<code>img{max-width=100%}</code> is a simple solution to all your problems', '<code>@media screen and(min-width)</code> to style for bigger screen sizes', '<code>transform:scale</code> on hover to make cards pop out']
    },
    card9 = {
        id: 'card9',
        img: 'img/lauren.png',
        alt: `Re-designing a friends yoga website`,
        description: "I tried to re-design a friend's yoga site, using cards, animations for menu icons and so on. Sadly the site has not been finished since I haven't yet worked with forms on a project of my own.",
        features: ['Animated cards', 'Fully responsive', 'Mobile and desktop navigation bars', 'Flexbox layout']
    }
];


    //    ****  CARDS  ****
cardsArray.forEach(card => {
    container.insertAdjacentHTML(
        'beforeend', 
        `<div class='card'>
            <div class='photo__container'>
                <img class='img' src= '${card.img}' alt='${card.alt}'>
            </div>

            <p class='card__description'>${card.description}</p>

            <button class='${card.id}'>Read more...</button>

            <div id='${card.id}', class='hide'>
                <div class='features'>
                <p>Features:</p>
                <ul class='card__list'>
                    <li class='card__list_item'>${card.features[0]}</li>
                    <li class='card__list_item'>${card.features[1]}</li>
                    <li class='card__list_item'>${card.features[2]}</li>
                    <li class='card__list_item'>${card.features[3]}</li>
                </ul>
                </div>
            </div>
        </div>`
        
    );
});

 
//    ******  BUTTON HIDE/SHOW CONTENT ******
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    const id = button.className;
    const showMore = document.getElementById(`${id}`); 

    button.addEventListener('click', () => {
        showMore.classList.toggle('hide');
    });
});