const express = require('express');
const router = express.Router();

//@route post api /users /register
//@desc  Register a user
//@access Public
router.post('/register',(req,res)=>res.json({
  msg:'user route works!'
}));

module.exports= router