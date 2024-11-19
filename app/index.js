
import './style.scss'
const Pokemons = require("../javascript/darkmode");{
    console.log('pokemons')
}
const {fetchMostPopular} = require("../javascript/newyrk");{
    //console.log('this')
}
const {showMainContent} = require("../javascript/anothersplashscreen");{
    //console.log('this')
}
showMainContent();
const popularNews =  await fetchMostPopular();
console.log(popularNews);





























//test functions
function testWebpack(){
    const greet = "fuck";
    console.log(greet);
    return greet;
}

testWebpack();

let greet2 = "test";
console.log(greet2);

var deadCode = "dead code";