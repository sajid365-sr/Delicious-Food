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
        <div class="card"  onclick ="loadMealDetails(${element.idMeal})">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">${element.strMeal}</h4>
                      <span class="fw-bold text-secondary">Origin: ${element.strArea}</span>
                      <p class="card-text">${element.strInstructions.slice(0,200)}<a class ="text-decoration-none mx-3" href="#">See More...</a></p>
                    </div>
                  </div>`;

                  mealContainer.appendChild(mealDiv)
console.log(element)
                
    });
}

let searchFood = () =>{
    let inputField = document.getElementById('searchInput');
    let searchValue = inputField.value;

    loadMeals(searchValue);
    inputField.value ='';
}
let loadMealDetails = (mealId) =>{

let url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    // console.log(mealId)
    // console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

let displayMealDetails = (mealDetail) =>{
    
    let detailContainer = document.getElementById('detail-container');

    document.getElementById('hiddenMeal').className = 'd-block my-4 '
   
    detailContainer.innerHTML ='';



let mealDiv = document.createElement('div');
mealDiv.classList.add('card');
mealDiv.innerHTML = `
            <img src="${mealDetail.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${mealDetail.strMeal}</h5>
                  <p class="card-text">${mealDetail.strInstructions.slice(0,200)}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
`
detailContainer.appendChild(mealDiv)
    

}

loadMeals('a');





