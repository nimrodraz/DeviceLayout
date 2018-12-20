const express = require('express');
const router = express.Router();
const pageFactory = require('../core/page/factory.js');
const deviceLayoutRatiosFactory = require('../core/deviceLayoutRatios/factory.js');
const utils = require('../helpers/utils');
const Layout = require('../core/layout/layout.js');

//route and catch the "api/pages/" with the ID param
router.get('/:id',(req,res)=>{
   // res.send(req.params.id );

   //get page content
   const page = pageFactory.getPage(req.params.id);

   //get device
   const device= utils.getDevice(req);
   
   //get the randomaly selected layout
   const deviceLayoutRatios = deviceLayoutRatiosFactory.getDeviceLayoutRatios();
   const layoutId = deviceLayoutRatios.GetLayout(device.id);

   //Get layout object and set it to page
   const layout = new Layout(layoutId);
   page.Layout = layout;
   page.Device = device.deviceType;

    res.send(page);

});


module.exports = router;