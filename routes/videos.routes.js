const Video = require('../models/videos.models')
const router = require('express').Router();

//Creating a POST endpoint
router.post('/api/video', (req, res)=>{
    // var videos = new videos();
    //console.log(req)
    let new_video = new Video({
        //category:req.body.category,
        title:req.body.title,
        video:req.body.video,
    });
        //new_video.category = [req.body.category];
        new_video.save(err=>{
        if(err)
            {
                console.log(err)
            }
        res.json(
            //console.log(new_video),
            {response:"Video added succesfully!"}
        )
    });
});

//creating a GET Video endpoint to get/retrive all information from DB
router.get('/api/video', (req, res, next)=>{
    Video.find({}, function(err, foundVideo){
        if(err) return next(err);
        if (!foundVideo){
            return res.json({message:"No categories were found"})
        }
        res.json(foundVideo);
    });
});

router.get('/api/video/:id', function(req, res){
    Video.findOne({_id:req.params.id}, function(err,foundVideo){
        if(err) return next(err);
        if(!foundVideo){
            res.json("Not found");
        }else{
            res.json(foundVideo);
        }
    });
});

//Request for and deleting a Video (GET single Video)
router.delete('/api/video/:id', function(req, res){
    Video.findByIdAndRemove({_id:req.params.id}, function(err,foundVideo){
        if(err) return next(err);
        res.json(foundVideo);
    
    });
});

//Creating an update request for the category using PUT
router.put('/api/video/:id', function(req,res,next){
    Video.findById(req.params.id, function(err,foundVideo){
        if(err) return next(err);

        if(req.body.title){
            foundVideo.title = req.body.title;
        }
        if(req.body.video){
            foundVideo.video = req.body.video;
        }
        foundVideo.save(function(err, updatedVideo){
            if (err) return next(err);
            let obj = {
                message:"Category updated successfully",
                updatedVideo: updatedVideo
            }
            res.json(obj)
        });
    });
});
module.exports = router;