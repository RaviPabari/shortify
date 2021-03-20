const express = require('express')
const router = express.Router();
const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')
const Url = require('../models/Url')

//@route    POST /api/shorten
//creates short url

router.post('/shorten',async (req,res)=>{
    //extract the longUrl passed in the api
    const { longUrl } = req.body
    //get the base url from the config file
    const baseUrl = config.get('baseUrl')

    //if the base url not valid return 401 and stop
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url')
    }

    //generate new random string 
    const urlCode = shortid.generate();
    // console.log(urlCode)

    //check if the entered url is valid
    if(validUrl.isUri(longUrl)){ 
        try{
            //if the given link is already shorten then it must be in database
            //if in there return the shorten link directly
            let url = await Url.findOne({longUrl})
            if(url){
                res.json(url)
            }else{
                //if not then create a new short url
                const shortUrl = baseUrl + '/' + urlCode

                //create the url object to store in db
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date : new Date()
                })
                //save the new url object to db
                await url.save();
                //return the json object with the short url
                res.json(url)
            }
        }catch(err){
            //if any error during execution the most probably 
            //it would be from the server side return status 500
            console.log(err);
            res.status(500).json('Server error (ᴗ_ ᴗ。)')
        }
    }else{
        //if not valid return 401
        res.status(401).json('Invalid long url')
    }
})

module.exports = router