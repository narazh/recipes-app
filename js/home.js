const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
// const menu = [
//     {
//         img: "breakfast.svg",
//         name: "breakfest",


//     },

//     {
//         img: "lunch.svg",
//         name: "lunch",


//     },

//     {
//         img: "dinner.svg",
//         name: "dinner",


//     },

//     {
//         img: "dessert.svg",
//         name: "dessert",


//     },

//     {
//         img: "quick.svg",
//         name: "quick bite!",


//     },

// ]

// // Dom
// const menuEl = document.getElementById('menu')

// menuEl.innerHTML = menu.map(m => {
//     return `
//         <div>
//             <img src="./${m.img}" alt="">
//             <h4>${m.name}</h4>
//         </div>`

// }).join('')


function getMeals(category = "Starter"){
    fetch(API + category)
    .then(response => response.json())
    .then(foods => {
        console.log(foods);
    })
}


getMeals()


// git init 
// git add .
// git commit -m "lesso js8"
// git push