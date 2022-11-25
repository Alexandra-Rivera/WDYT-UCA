const Post = require("../models/post.model");
const debug = require("debug")("app:post-controller"); 

const controller = {}; 

controller.create = async (req, res) => {
    try{
        const {title, description, image} = req.body; 

        const post = new Post({
            title: title, 
            description: description, 
            image: image
        }); 
    
        const newPost = await post.save(); 
        if(!newPost){
            return res.status(409).json({error: "Ocurrió un error al crear el post"}); 
        }
        return res.status(201).json(newPost);

    } catch(error){
        return res.status(500).json({error: "Error interno de servidor"})
    }
    
}

controller.findAll = async (req, res) =>{
    try{
        const posts = await Post.find({hidden:false}); 
        return res.status(200).json({posts});
    }catch(error){
        debug({error}); 
        return res.status(500).json({error: "Error interno del servidor"}); 
    }
} 

controller.findOneById = async (req, res) => {
    try{
        const {identifier} = req.params; 
        const post = await Post.findById(identifier); 
        if(!post){
            return res.status(404).json({Error: "Post no encontrado"}); 
        } 
        return res.status(200).json(post);  
    }catch{
        debug({error}); 
        return res.status(500).json({error: "Error interno de servidor"}); 

    }
}
module.exports = controller; 