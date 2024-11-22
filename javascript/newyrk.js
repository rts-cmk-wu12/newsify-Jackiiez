
const API_KEY ='xLbrZhh8GbfMpxgJdhTYa6kPJvEP12VO';
const BASE_URL = 'https://api.nytimes.com/svc/'; //stop ved svc
const END_POINT_ONE = {
    mostPoplarByViews: 'mostpopular/v2/viewed/',
    topStories:'search/v2/'

}
async function fetchMostPopular(days = 1){
const url = new URL(`${days}.json`,BASE_URL+END_POINT_ONE.mostPoplarByViews)
//set serch param
url.searchParams.set('api-key', API_KEY);
//fetch til api
const response= await fetch(url);
const data = await response.json();
return data;
}
async function fetchTopStories(page='articlesearch'){
    const url = new URL(`${page}.json?q=health&`,BASE_URL+END_POINT_ONE.topStories)
    //set serch param
    url.searchParams.set('api-key', API_KEY);
    //fetch til api
    const response= await fetch(url);
    const data = await response.json();
    return data
    ;
    
    }

    async function fetchSport(page='articlesearch'){
        const url = new URL(`${page}.json?q=sport&`,BASE_URL+END_POINT_ONE.topStories)
        //set serch param
        url.searchParams.set('api-key', API_KEY);
        //fetch til api
        const response= await fetch(url);
        const data = await response.json();
        return data
        ;
        
        }
    // const data2= fetchTopStories.results




module.exports= {fetchMostPopular, fetchTopStories,fetchSport}