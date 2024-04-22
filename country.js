
const countryName= new URLSearchParams(location.search).get('name')
let countryContent=document.querySelector('.country-content')
let mainContent= document.querySelector('.main-content')
const themeChange= document.querySelector('.dark')




fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>{
   return res.json()
}).then(([country])=>{


// -------------------


let backBtn= document.createElement('button')
backBtn.classList.add('back-btn')
backBtn.innerHTML=`<i class="fa-solid fa-arrow-left"></i>&nbsp; &nbsp;Back</button>`
backBtn.addEventListener('click', ()=>{
    history.back()
})

let image= document.createElement('img')
image.classList.add('country-flag')
image.src= `${country.flags.svg}`
image.alt= `${country.name.common}`


let textContainer= document.createElement('div')
textContainer.classList.add('text-container')
textContainer.innerHTML=` <h2 class="country-title"> ${country.name.common}</h2>
<div class="text-wrapper">
 <div class="left-side">
    <p><b>Native Name: </b>${country.name.nativeName ? Object.values(country.name.nativeName)[0].common: "Not Applicable"}</p>
     <p><b>Population: </b>${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
     <p><b>Region: </b>${country.region ? country.region : "Not Applicable"}</p>
     <p><b>Sub Region: </b>${country.subregion ? country.subregion : ""}</p>
     <p><b>Capital: </b>${country.capital ? country.capital : ""}</p> 
  </div>
  <div class="right-side">
     <p><b>Top Level Domain: </b>${country.tld ? country.tld[0] : ""}</p>
     <p><b>Currencies: </b>${country.currencies ? Object.values(country.currencies).map((currency)=> currency.name).join(', ') : "Not Applicable"}</p>
     <p><b>Languages: </b>${country.languages ? Object.values(country.languages).join(', ') : ""}</p>  
  </div>
 </div>
 <div class="border-countries">
     <h2>Border Countries:</h2>
     <div class="anchor-container" id="border-container">
     </div>
</div>`
mainContent.append(backBtn)
mainContent.append(countryContent)
countryContent.append(image)
countryContent.append(textContainer)

if(country.borders){country.borders.map((border)=>{
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then((res)=> res.json())
    .then(([borderCountry])=>{
        // console.log(borderCountry)
        const borderAnchor= document.createElement('a')
        borderAnchor.href=`country.html?name=${borderCountry.name.common}`
        borderAnchor.innerText=borderCountry.name.common
        // console.log(borderAnchor)
        document.getElementById('border-container').appendChild(borderAnchor)
    })
 })}
 else{
    borderAnchor.innerText=""
 }


})


// Implementing Dark Mode

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








// let anchor= document.createElement('a')
// anchor.classList.add('back-btn')
// anchor.href=""
// anchor.innerHTML=`<i class="fa-solid fa-arrow-left"></i>&nbsp; &nbsp;Back</button>`

// let image= document.createElement('img')
// image.classList.add('country-flag')
// image.src= "https://flagcdn.com/md.svg"
// image.alt= "Country's Flag"


// let textContainer= document.createElement('div')
// textContainer.classList.add('text-container')
// textContainer.innerHTML=` <h2 class="country-title"> Moldova</h2>
// <div class="text-wrapper">
//  <div class="left-side">
//      <p><b>Native Name: </b>Europe</p>
//      <p><b>Population: </b>11,319,511</p>
//      <p><b>Region: </b>Europe</p>
//      <p><b>Sub Region: </b>Western Europe</p>
//      <p><b>Capital: </b>Brussels</p> 
//   </div>
//   <div class="right-side">
//       <p><b>Top Level Domain: </b>Europe</p>
//      <p><b>Currencies: </b>Western Europe</p>
//      <p><b>Languages: </b>Brussels</p>  
//   </div>
//  </div>
//  <div class="border-countries">
//      <h2>Border Countries:</h2>
//      <div class="anchor-container">
//          <a href=""><p>France</p></a>
//          <a href=""><p>Germany</p></a>
//          <a href=""><p>Netherlands</p></a>
//      </div>
// </div>`
// mainContent.append(anchor)
// mainContent.append(countryContent)
// countryContent.append(image)
// countryContent.append(textContainer)


















// let image= document.createElement('img')
// image.classList.add('country-flag')
// image.src= `${country.flags.svg}`
// image.alt= `${country.name}`



