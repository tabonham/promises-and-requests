const axios = require('axios');
const searchTerm = process.argv[2];
const apiKey = '9b4V7GqPvj8MtNh9x165FjzGJQvImDzu';
const apiUrl = 'https://api.giphy.com/v1/gifs/search';
const requestParams = `api_key=${apiKey}&q=${searchTerm}&limit=5`;

axios.get(`${apiUrl}?${requestParams}`).then((response)=>
{
    let gifs = response.data.data;
    for(let gif of gifs){
        console.log(gif.url);
    }
});







