let myFavorites = [];

const postFav = (req, res) => {
  const  character = req.body;

  myFavorites.push(character);
  return res.status(200).send(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites= myFavorites.filter(fav => fav.id !== Number(id));
 

  return res.status(200).send(myFavorites);
};

module.exports = { postFav, deleteFav };
