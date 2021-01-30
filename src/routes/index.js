import express from "express";
const  router = express.Router();
import indexCtrl  from '../controller/indexCntroller.js'
import  passport from  'passport'
const auth = passport.authenticate('jwt',{session:false})



router.get("/",indexCtrl.featchProfile);
router.post("/validate-rule",indexCtrl.validate_rule);


export default  router;
