const axios = require("axios");
const apiUrl = "http://localhost:5000/constellations";

let newConst = {
  name: "Hello Kitty Adventure",
  meaning: "Hello Kitty goes and frolicks with friends.",
  starsWithPlanets: 2,
  quadrant: "!L33T",
};

/*axios
  .get(`${apiUrl}`)
  .then(({ data }) => {
    let exists = data.find((constellation) => constellation.name === newConst.name);
    if (exists) return Promise.reject(`Constellation ${newConst.name} already Exists.  Try again!`);
    return axios.post(apiUrl, newConst).then(({data}) => Promise.resolve(data));
  }).then(data=>console.log(data))
  .catch(console.log);
*/
//;


function update(id, body) {
    if (!id || !body) return Promise.reject(false).catch(console.log);
    const url = `${apiUrl}/${id}`;
     axios.put(url, body).then(({ data }) => console.log(data));
  }
   
  const hydrus = {
    name: "Hydrus",
    meaning: "Water Snake",
    starsWithPlanets: 5,
    quadrant: "SQ1",
  };
   
  update();
    
    