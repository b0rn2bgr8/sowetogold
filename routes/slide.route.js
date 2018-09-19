const Slide = require('../models/slide.model'); //require the model schema 
const router = require('express').Router();
const Multer = require('multer');
const multer = Multer({
    storage: Multer.memoryStorage()
});
const imgUpload = require('../utility/imgUpload');

//Creating a POST endpoint
router.post('/api/slides', multer.single("picture"), imgUpload.uploadToGcs, (req, res, next)=>{
    let new_slide = new Slide({
        title:req.body.title,
        body:req.body.body,
        status:req.body.status,
        picture: req.file.cloudStoragePublicUrl,
        });
        new_slide.category = [req.body.category];
        new_slide.save(err=>{
        if(err){console.log(err)}
        res.json({response:"New slide created "})
    });
});

//creating a GET articles endpoint to get/retrive all information from DB
router.get('/api/slides', (req, res,next)=>{
    //Function to get all articles from a database that were created based on the UserSchema
    Slide.find()
    .populate('category')
        //used for checcking for errors
     .exec((err,slide)=>{;
        //checking if the results have been retained.
        if (err) return next(err);
        // return res.json({message:"No Article were found"})
        res.json(slide);
    });
});

//Request for getting a single slide (GET single slide with ID)
router.get('/api/slides/:id', function(req, res){
    Slide.findOne({_id:req.params.id}, function(err,foundSlide){
        if(err) return next(err);
        // res.json(foundArticle);
        if(!foundSlide) {
            res.json("Not Found");
        } else {
            res.json(foundSlide);
        }
    });
});

//Request for and deleting an slide (by single slide)
router.delete('/api/slides/:id', function(req, res){
    Slide.findByIdAndRemove({_id:req.params.id}, function(err,foundSlide){
        if(err) return res.json(err);
        res.json("Successfully Removed the slide");
    });
});

//Creating an update request for the category using PUT
router.put('/api/slides/:id', function(req,res,next){
    Slide.findById(req.params.id, function(err,foundSlide){
        if(err) return next(err);

        if(req.body.category){
            foundSlide.category = req.body.category;
        }
        if(req.body.title){
            foundSlide.title = req.body.title;
        }
        if(req.body.body){
            foundSlide.body = req.body.body;
        }
        foundSlide.save(function(err, updatedSlide){
            if (err) return next(err);
            let obj = {
                message:"Article updated successfully",
                updatedSlide: updatedSlide
            }
            res.json(obj)
        });
    });
});

module.exports = router;