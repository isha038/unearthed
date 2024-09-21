import express from 'express'
import path from 'path';

//helps to work with file paths and directories
//converts fileurl to filepath , useful as many node js apis expect file paths instead of file urls
import {fileURLToPath} from 'url'

import giftData from '../data/gifts.js'


//converts the current url of the module file to filepath and diretory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req,res)=>{
    res.status(200).json(giftData)
})

//send a file as a response to the client by resolving the path to gift.html
// a specfic webpage for each gift
router.get('/:giftId', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'../public/gift.html'))

})

export default router