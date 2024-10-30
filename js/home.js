const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const menu = [
    {
        img: "breakfast.svg",
        name: "breakfest",


    },

    {
        img: "lunch.svg",
        name: "lunch",


    },

    {
        img: "dinner.svg",
        name: "dinner",


    },

    {
        img: "dessert.svg",
        name: "dessert",


    },

    {
        img: "quick.svg",
        name: "quick bite!",


    },

]

// Dom
const menuEl = document.getElementById('menu')

// menuEl.innerHTML = menu.map(m => {
//     return `
//         <div>
//             <img src="./${m.img}" alt="">
//             <h4>${m.name}</h4>
//         </div>`

// }).join('')


// DOM

const recipes_cards = document.querySelector('.recipes-cards')


function getMeals(category = "Starter") {
    fetch(API + category)
        // JSON string
        .then(response => response.json())
        .then(foods => {
            console.log(foods.meals);
            recipes_cards.innerHTML = foods.meals.map(el =>{
                return renderCard()
            }).join('')
        })
}


getMeals()

function renderCard() {
    return `{}
            <div class="card">
                    <div class="card-img">
                        <img src="./Recipe Image.png" alt="">
                    </div>
                    <div class="card-text">
                        <h4>Savory Herb-Infused Chicken</h4>
                        <p>
                            Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken
                        </p>
                        <div>
                            <p>40 Min - easy prep - 3 serves</p>
                            <button>view recipe</button>
                        </div>
                    </div>
                </div>`
}


// git init
// git add .
// git commit -m "lesso js8"
// git push