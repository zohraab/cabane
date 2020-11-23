const express = require('express');
// on utullisite la const router pour joindre l'objet express
const router = express.Router();
// recuperer lider de l'objer (update)

const ObjectID = require('mongoose').Types.ObjectId;

// esseyer d'afficher le contenu de notre base de donner
const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
});
// post crée quelque chose
router.post('/', (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message
  });

  newRecord.save((err, docs) => {
      // si il n'ya pas d'erreur
    if (!err) res.send(docs);
    // si il y a une erreur
    else console.log('Error creating new data : ' + err);
  })
});
// update (modifier les donner)
router.put("/:id", (req, res) => {
       // recuperer des idee ou parametre (req.params.id)

  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const updateRecord = {
    author: req.body.author,
    message: req.body.message
  };
  // methode pour supprimé 

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  PostsModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
});

module.exports = router;