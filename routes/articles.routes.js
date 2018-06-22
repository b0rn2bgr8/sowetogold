const Article = require('../models/article.model');
const router = require('express').Router();
// const multer = require('multer');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'client/uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + '.' + "jpg")
//     }
//   })
// const upload = multer({
//     storage: storage
// });

//Creating a POST endpoint
// router.post('/articles',upload.single('picture'), (req, res)=>{
    router.post('/articles', (req, res)=>{
    //console.log(req.file)
    var article = new Article();

    let new_article = new Article({
        title:req.body.title,
        body:req.body.body,
        // picture: req.file.filename,
        });

        new_article.category.push(req.body.category)
        new_article.save(err=>{
        if(err){console.log(err)}
        res.json({response:"New article created"})
    });
});

//creating a GET articles endpoint to get/retrive all information from DB
router.get('/articles', (req, res,next)=>{
    //Function to get all articles from a database that were created based on the UserSchema
    Article.find({})
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
router.get('/articles/:id', function(req, res){
    Article.findOne({_id:req.params.id}, function(err,foundArticle){
        if(err) return next(err);
        res.json(foundArticle);
    });
});

//Request for and deleting an article (by single article)
router.delete('/articles/:id', function(req, res){
    Article.findByIdAndRemove({_id:req.params.id}, function(err,foundArticle){
        if(err) return next(err);
        res.json(foundArticle);
    });
});

//Creating an update request for the category using PUT
router.put('/articles/:id', function(req,res,next){
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