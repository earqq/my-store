
const express = require('express');
const faker = require('faker');


const router = express.Router();


router.get('/users', async (req,res) =>{
  const {limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }
});

module.exports = router;
