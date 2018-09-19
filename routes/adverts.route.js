const Adverts = require('../models/adverts.models')
const router = require('express').Router();

//Creating a POST endpoint
router.post('/api/adverts', (req, res)=>{
    // var adverts = new Adverts();
    let new_advert = new Adverts({
        summary:req.body.summary,
        picture:req.body.picture,
        Url:req.body.Url,
    });

        new_advert.save(err=>{
        if(err)
            {
                console.log(err)
            }
        res.json(
            {response:"Advert added succesfully!"}
        )
    });
});

//creating a GET adverts endpoint to get/retrive all information from DB
router.get('/api/adverts', (req, res, next)=>{
    Adverts.find({}, function(err, foundAdverts){
        if(err) return next(err);
        if (!foundAdverts){
            return res.json({message:"No categories were found"})
        }
        res.json(foundAdverts);
    });
});

router.get('/api/adverts/:id', function(req, res){
    Adverts.findOne({_id:req.params.id}, function(err,foundAdverts){
        if(err) return next(err);
        if(!foundAdverts){
            res.json("Not found");
        }else{
            res.json(foundAdverts);
        }
    });
});
//Request for and deleting a adverts (GET single adverts)
router.delete('/api/adverts/:id', function(req, res){
    Adverts.findByIdAndRemove({_id:req.params.id}, function(err,foundAdverts){
        if(err) return next(err);
        res.json(foundAdverts);
    
    });
});

//Creating an update request for the category using PUT
router.put('/api/adverts/:id', function(req,res,next){
    Adverts.findById(req.params.id, function(err,foundAdverts){
        if(err) return next(err);

        if(req.body.summary){
            foundAdverts.summary = req.body.summary;
        }
        if(req.body.picture){
            foundAdverts.picture = req.body.picture;
        }
        if(req.body.Url){
            foundAdverts.Url = req.body.Url;
        }
        foundAdverts.save(function(err, updatedAdvert){
            if (err) return next(err);
            let obj = {
                message:"Category updated successfully",
                updatedAdvert: updatedAdvert
            }
            res.json(obj)
        });
    });
});

module.exports = router;