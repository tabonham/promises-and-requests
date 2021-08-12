const axios = require("axios");
const apiUrl = "http://localhost:5000/constellations";

function getConstellations(ids) {
    const promises = ids.map((id) => {
      const url = `${apiUrl}/${id}`;
      return axios.get(url);
    });
    console.log(promises);
   
    return Promise.all(promises);
  }
   
  const ids = ["KGQIwSq", "32TN5F"];
  getConstellations(ids).then((responses)=> {
      for(let response of responses){
          console.log(response.data);
      }
  }).catch(err=>console.log(err.message));
  