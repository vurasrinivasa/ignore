const express = require('express');
const router = express.Router();

router.get('/register',(req,res)=>res.json({
  msg:'profile route works!'
}));

module.exports= router