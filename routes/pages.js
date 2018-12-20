const express = require('express');
const router = express.Router();
const pageFactory = require('../core/page/factory.js');
const deviceLayoutRatiosFactory = require('../core/deviceLayoutRatios/factory.js');
const utils = require('../helpers/utils');

//route and catch the "api/pages/" with the ID param
router.get('/:id',(req,res)=>{
   // res.send(req.params.id );

   //get page content
   const page = pageFactory.getPage(req.params.id);

   //get device
   const device= utils.getDevice(req);
   
   //get the randomaly selected layout
   const deviceLayoutRatios = deviceLayoutRatiosFactory.getDeviceLayoutRatios();

    res.send(req.params.id );

});


module.exports = router;