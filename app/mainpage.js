import '../scss/_mainpage.scss';
const {fetchMostPopular, fetchTopStories} = require("../javascript/newyrk");{
    //console.log('this')
}
const {showHide} = require("../javascript/laes-mere");{
    //console.log('this')
}

//vi henter vores fetch fra functions siden
const topStories= await fetchTopStories();
//console log hele objectet
console.log(topStories)
//console log kun alle resultaterne
console.log(topStories.response)
console.log(topStories.response.docs)
console.log(topStories.response.docs[0])
//console log kun title 1
// console.log(topStories.results[0].title)


//vi henter alle resultaterne i en const
const data = topStories.response.docs

       
//henter en title for hver resultat
 data.forEach(element => {
    
  const pokemonList = document.querySelector(".homefetch")
//  console.log(element)
//  console.log(element.section)
//       console.log(element.docs.abstract)
//  // her opretter vi en variable hvor vil laver a tags ud fra vores array
 const pokemonlink = document.createElement('h3')
 //her bestemer vi hvad a taget skal inholde i urlen(pokemon.name er en property fra poke api)
 
  pokemonlink.textContent = element.headline.main


 const abstract = document.createElement('p')
 abstract.textContent = element.abstract
  console.log(abstract)

  pokemonList.append(pokemonlink, abstract);

 });
 const data2 = topStories.response.docs

       
//henter en title for hver resultat
 data.forEach(element => {
    
  const pokemonList = document.querySelector(".homefetch2")
//  console.log(element)
//  console.log(element.section)
//       console.log(element.docs.abstract)
//  // her opretter vi en variable hvor vil laver a tags ud fra vores array
 const pokemonlink = document.createElement('h3')
 //her bestemer vi hvad a taget skal inholde i urlen(pokemon.name er en property fra poke api)
 const abstract = document.createElement('p')
 pokemonlink.textContent = element.headline.main
 abstract.textContent = element.abstract
  
  pokemonList.appendChild(pokemonlink, abstract);

 });

