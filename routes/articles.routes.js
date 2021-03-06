const Article = require('../models/article.model');
const router = require('express').Router();
const Multer = require('multer');
const multer = Multer({
    storage: Multer.memoryStorage()
});
const imgUpload = require('../utility/imgUpload');

//Creating a POST endpoint
    router.post('/api/articles', multer.single("picture"), imgUpload.uploadToGcs, (req, res, next)=>{
    //router.post('/api/articles', (req, res, next)=>{
    //var article = new Article();
    let new_article = new Article({
        title:req.body.title,
        body:req.body.body,
        status:req.body.status,
        picture: req.file.cloudStoragePublicUrl,
        });
        new_article.category = [req.body.category];
        new_article.save(err=>{
        if(err){console.log(err)}
        res.json({response:"New article created"})
    });
});

//creating a GET articles endpoint to get/retrive all information from DB
router.get('/api/articles', (req, res,next)=>{
    //Function to get all articles from a database that were created based on the UserSchema
    Article.find()
    .populate('category')
        //used for checcking for errors
     .exec((err,article)=>{;
        //checking if the results have been retained.
        if (err) return next(err);
        // return res.json({message:"No Article were found"})
        res.json(article);
    });
});

//Request for getting a single article (GET single article)
router.get('/api/articles/:id', function(req, res){
    Article.findOne({_id:req.params.id}, function(err,foundArticle){
        if(err) return next(err);
        // res.json(foundArticle);
        if(!foundArticle) {
            res.json("Not Found");
        } else {
            res.json(foundArticle);
        }
    });
});

//Request for and deleting an article (by single article)
router.delete('/api/articles/:id', function(req, res){
    Article.findByIdAndRemove({_id:req.params.id}, function(err,foundArticle){
        if(err) return res.json(err);
        res.json("Successfully Removed");
    });
});

//Creating an update request for the category using PUT
router.put('/api/articles/:id', function(req,res,next){
    Article.findById(req.params.id, function(err,foundArticle){
        if(err) return next(err);
        if(req.body.title){
            foundArticle.title = req.body.title;
        }
        if(req.body.body){
            foundArticle.body = req.body.body;
        }
        foundArticle.save(function(err, updatedArticle){
            if (err) return next(err);
            let obj = {
                message:"Article updated successfully",
                updatedArticle: updatedArticle
            }
            res.json(obj)
        });
    });
});
module.exports = router;