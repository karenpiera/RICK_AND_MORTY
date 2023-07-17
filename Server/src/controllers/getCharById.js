const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
const { id } = req.params;

  axios(`${URL}/${id}`)
    .then((response) => response.data)
    .then((data)=>{
      const character = {
        id:data.id,
        status:data.status,
        name:data.name,
        species:data.species,
        origin:data.origin,
        image:data.image,
        gender:data.gender,
      };
     if(character.name){ 
     return res.status(200).json(character) 
     }
     return res.status(404).send("Not found")    

    
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
};

module.exports = {getCharById};

// const axios = require('axios');

// const getCharById = (response, id)=> {
//   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//      .then(response=>response.data)
//     .then(({name,gender,species,origin,image,status}) => {
//       const character = {id,name,gender,species,origin,image,status };

//       return response
//       .writeHead(200, { "Content-type": "application/json" })
//       .end(JSON.stringify(character));
//     })
//     .catch(error => {
//       return response
//       .writeHead(500, { "Content-type": "text/plain" })
//       .end(error.message);
//     });
// }

// module.exports = {getCharById};