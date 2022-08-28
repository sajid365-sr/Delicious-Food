const loadMeals = (category) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

let displayMeals = meal =>{
let mealContainer = document.getElementById('meal-container');
mealContainer.innerHTML ='';
    meal.forEach(element => {

        let mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
        <div class="card">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">${element.strMeal}</h4>
                      <span class="fw-bold text-secondary">Origin: ${element.strArea}</span>
                      <p class="card-text">${element.strInstructions.slice(0,200)}<a class ="text-decoration-none mx-3" href="#">See More...</a></p>
                    </div>
                  </div>`;

                  mealContainer.appendChild(mealDiv)

                
    });
}

let searchFood = () =>{
    let inputField = document.getElementById('searchInput');
    let searchValue = inputField.value;

    loadMeals(searchValue);
    inputField.value ='';
}
loadMeals('a');



