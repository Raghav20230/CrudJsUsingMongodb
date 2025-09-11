const express = require('express');
const router = express.Router();  
const Alien = require('../models/alien')//"Alien collection ke liye banaya gaya model import karo taaki database ke saath CRUD operations kar sako."

router.get('/', async(req, res) => {  //Ye route define karta hai:
 try {
//async → function asynchronous hai
//await → Promise complete hone tak wait karo
//Ye code ko clean aur easy to read banata hai vs callbacks
  const aliens =await Alien.find()//Ye Mongoose ki query hai jo MongoDB ke andar aliens collection ka saara data nikal kar laati hai.
  //await isliye use kiya, kyunki ye asynchronous operation hai (database call me time lagta hai).
  res.json(aliens)//Client ko JSON format me data bhej diya jata hai (API response)
 } catch (err) {
  req.send('ERROR '+err)
 } 
});

router.get('/:id', async(req, res) => {
 try {
  const alien =await Alien.findById(req.params.id)
  res.json(alien)
 } catch (err) {
  req.send('ERROR '+err)
 } 
});

router.patch('/:id', async(req, res) => {
 try {
  const alien =await Alien.findById(req.params.id)
  alien.sub=req.body.sub
  const a1 = await alien.save()
  res.json(a1)
 } catch (err) {
  req.send('ERROR '+err)
 } 
});

router.post('/',async(req,res)=>{
  const alien = new Alien({
    name:req.body.name,
    tech:req.body.tech,
    sub:req.body.sub
  })
  
  try {
    const a1 = await alien.save()
    res.json(a1)
  } catch (err) {
    res.send('Error')
  }
})

module.exports = router;
