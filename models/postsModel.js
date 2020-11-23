const mongoose = require("mongoose");
const PostsModel = mongosse.Model(
    "node-api",
     {
        //  creation de modèle de base de donnée 
        auteur:{
            type: String,
            required: true
        },
        message: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        description: {
             type: String, 
             required: true 
            },
            userId: {
                 type: String, 
                 required: true 
                },
    },

    "posts"
);
module.exports= mongoose.model ('posts', PostModel);

