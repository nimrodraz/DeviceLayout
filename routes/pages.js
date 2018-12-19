const express = require('express');
const router = express.Router();
const pageFactory = require('./PagesFactory');

//route and catch the "api/pages/" with the ID param
router.get('/:id',(req,res)=>{
   // res.send(req.params.id );

    //get page content
    const page = pageFactory.getPage(req.params.id);


});


module.exports = router;