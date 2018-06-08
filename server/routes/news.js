const express = require('express')
const router = express.Router()
const newsController = require('../controllers/NewsController')


router.get('/', (req,res,next) =>{
    newsController.find(req.query, (err,results)=>{
        if(err){
            console.log(err)
            res.json({
                success: 0,
                error: err
            })
            return
        }
        res.json({
            success: 1,
            data:results
        })
    })
})

router.get('/:id', (req,res,next) => {
    const id = req.params.id

    newsController.findById(id, (err, result) => {
        if(err){
            console.log(err)
            res.status(500).json({
                success: 0,
                data: result
            })
            return
        }
        res.status(200).json({
            success: 0,
            data: result
        })
    })
})

router.post('/', (req,res,next) =>{
    newsController.create(req.body, (err,result)=>{
        if(err){
            console.log(err)
            res.json({
                success: 0,
                error: err
            })
            return
        }
        res.json({
            success:1,
            data:result
        })
    })
})

module.exports = router