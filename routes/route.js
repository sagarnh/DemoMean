const express = require('express');
const router = express.Router();
const contact = require('../models/contacts');

/* retrieveing data */
router.get('/contacts', function(req, res, next) {
  contact.find(function(err,contacts){
      res.json(contacts);
  });
});

/* sending data */
router.post('/contact',function(req,res,next){
  let newcontact = new contact({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      phone:req.body.phone   
    });
 
  newcontact.save(function(err,contacts){
      if(err){
          res.json({msg: 'failed to add'});
        }
      else{
        res.json({msg: 'contact added'});  
       }
    });
   
});

/* deleting the data */
router.delete('/contact/:id',function(req,res,next){
   contact.remove({_id: req.params.id}, function(err,result){
       if(err){
           res.json(err);
       }
       else{
           res.json(result);
       }
   });

});

module.exports = router;