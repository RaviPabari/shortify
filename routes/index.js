const express = require('express')
const router = express.Router();
const Url = require('../models/Url')

//@route    GET /:code
// Redirects to long/original url



router.get('/:code',async (req,res)=>{
    try {
        const url = await Url.findOne({ urlCode: req.params.code })
        if(url){
            return res.redirect(url.longUrl)
        }else{
            return res.status(404).json('No url found :(( ')
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json('Server error (ᴗ_ ᴗ。)')
    }
})
module.exports = router