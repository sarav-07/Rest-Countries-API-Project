const countryContainer = document.querySelector(".countries-container");
const filterByRegion= document.querySelector('.filter-list')
const searchInput= document.querySelector('.search-container input')
const themeChange= document.querySelector('.dark')
const darkModeSpan= document.querySelector('.dark-mode-span')



let allCountriesData;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data)=>{
    renderCountries(data)
    allCountriesData=data
    // console.log(allCountriesData)
  })
  


filterByRegion.addEventListener('change', (e)=>{
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
  .then((res) => {
    return res.json();
  })
  .then(renderCountries);
})


// function for rendering


function renderCountries(data){
  countryContainer.innerHTML=""
    data.forEach((country, index) => {   
      let countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href=`./country.html?name=${country.name.common}`
      countryCard.innerHTML = `<img src="${country.flags.svg}" alt="${country.name.common}">
    <div class="card-text">
    <h3 class="card-title">${country.name.common}</h3>
    <p><b>Population: </b>${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    <p><b>Region: </b>${country.region ? country.region : ""}</p>
    <p><b>Capital: </b>${country.capital ? country.capital : ""}</p>
    </div>`;
    countryContainer.append(countryCard);
    });
}

// Implementing search field
searchInput.addEventListener('input', (e)=>{
  // console.log(e.target.value)
  const filteredCountries= allCountriesData.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase())

)
renderCountries(filteredCountries)  
})


// Implementing Dark mode

themeChange.addEventListener('click', (e)=>{
  document.body.classList.toggle('dark-mode')

  let isDarkMode= document.body.classList.contains('dark-mode')

  if(isDarkMode){
  themeChange.innerHTML=`<span class="dark-mode-span"><i class="fa-solid fa-sun"></i></span>Light Mode`
}
else(
  themeChange.innerHTML=`<span class="dark-mode-span"><i class="fa-sharp fa-regular fa-moon"></i></span>Dark Mode`
)
})