const express = require("express"); 
const router = express.Router(); 


const posts = require('../../data/posts.example.json');
const postController = require("../../controllers/post.controller");

const postvalidators = require("../../validators/post.validators"); 
const runvalidations = require("../../validators/index.middleware"); 

router.get("/", postController.findAll); 
router.get("/", (req, res, next) => {
    return res.status(200).json({ posts })
}); 

router.get("/:identifier", (req, res) => {
    const id = req.params.identifier;
    
    const post = posts.find (p => p.id === id);

    if(!post){
        return res.status(404)
         .json({ error: "Post no encontrado"})
    }

    return res.status(200).json(post);
});

router.get("/:identifier", postController.findOneById);
router.post("/", postController.create);

router.get("/:identifier", 
      postvalidators.findPostByIdValidator,
      runvalidations, postController.findOneById); 

router.post("/", postvalidators.createPostValidator,
    runvalidations, postController.create); 
    
module.exports = router; 