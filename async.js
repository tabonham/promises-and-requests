const axios = require("axios");
const apiUrl = "http://localhost:5000/constellations";
const input = process.argv[2];  //Input coming from terminal

async function getConstellationGif(constName){
    let {data} = await axios.get(apiUrl);
    let foundConstellation = data.find(constell => constell.name === constName);
    if(!foundConstellation) return Promise.reject('No Constellation Found');
    console.log(foundConstellation.meaning);
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=${foundConstellation.meaning}&limit=1`;
    let gifData = await axios.get(giphyUrl);
    let gif = gifData.data.data[0];
    return {constellationName:constName, gifUrl:gif.url};

}
getConstellationGif(input).then(console.log).catch(console.log);


async function bulkDelete(ids) {
    const promises = ids.map((id)=>{
      let url = `${apiUrl}/${id}`;
      return axios.delete(url);
    });
    let deleteResp1 = await promises[0];
    let deleteResp2 = await promises[1];
    return [{id:ids[0]},{id: ids[1]}];  
}
//Input ids of constellations to be deleted
bulkDelete(["16SwYdp","IpalcF8"]).then(console.log);
	
async function getConstellationNameById(ids) {
    const url1 = `${apiUrl}/${ids[0]}`;
    const url2 = `${apiUrl}/${ids[1]}`;
    try {
      const resp1 = await axios.get(url1);
      const resp2 = await axios.get(url2);
      
      console.log(resp1.data);
      console.log(resp2.data);
      return [resp1.data, resp2.data];
    } catch (error) {
      throw `Constellation with id of ${id} could not be found.`;
    }
  }

  //Input ids of constellations to be retrieved
  getConstellationNameById(["q-Xaz2M","he_0LX0"]).then(console.log);