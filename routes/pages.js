const express = require('express');
const router = express.Router();
const pageFactory = require('../core/page/factory.js');

//route and catch the "api/pages/" with the ID param
router.get('/:id',(req,res)=>{
   // res.send(req.params.id );

   //get page content
   const page = pageFactory.getPage(req.params.id);

   //get device
   //Device device= Utils.GetDevice(System.Web.HttpContext.Current);

    res.send(req.params.id );

});


module.exports = router;