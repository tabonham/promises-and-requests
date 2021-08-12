const axios = require('axios');
const apiUrl = 'http://localhost:5000/constellations';


//axios.get(apiUrl).then(({data})=>console.log(data));
let newConst = {'name':'Redbull', 'meaning':'It gives you wings', 'starsWithPlanets':10, 'quadrant':'SQ9'};
//axios.post(apiUrl, newConst).then(response=>console.log(response));
axios.get(`${apiUrl}`).then(({data})=>console.log(data));
axios.put(`${apiUrl}/DAO9lH1`,{name:'Redbull3',meaning:'It gives you wings', starsWithPlanets:10, quadrant:'SQ9'}).then(({data})=>console.log(data));
axios.delete(`${apiUrl}/DAO9lH1`).then(({data})=>console.log(data));

