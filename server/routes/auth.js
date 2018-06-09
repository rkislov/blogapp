const express = require('express')
const router = express.Router()
const authController = require('../controllers/AuthController')

router.post('/logim', (req,res,next)=>{
    authController.login(req.body.email, req.body.password, (err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json({
                success:0,
                error:err
            })
            return
        }
        if(result){
            res.status(200).json({
                success: 1,
                data: {tokenID: result, email: req.body.email}
            })
        }else{
            res.status(401).json({
                success:0,
                data:result
            })
        }
    })
})
router.post('/', function(req, res, next) {
    authController.register(req.body.name,req.body.email, req.body.password, function(err, result){
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                error: err
            })
            return;
        }
        if(result){
            res.status(200).json({
                success: 1,
                data: {tokenID: result, name: req.body.name}
            });
        }else{
            res.status(401).json({
                success: 0,
                data: result
            });
        }
    });

});

module.exports = router