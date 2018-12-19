const express = require('express');
const router = express.Router();

//route and catch the "api/pages/" with the ID param
router.get('/:id',(req,res)=>{
    res.send(req.params.id );
});


module.exports = router;