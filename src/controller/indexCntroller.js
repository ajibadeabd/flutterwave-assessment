import indexServ from "../services/indexService.js";
import response from "../utility/response.js";

class userCntroller{
    async featchProfile(req,res){
        let data = await indexServ.featchProfile(req,res);
       res.status(200).json(response("success",'My Rule-Validation API.',data)) 
    }
    async validate_rule(req,res){
        let data = await indexServ.validate_rule(req,res);
       res.status(200).json(response("success",`field ${data.validation.field} successfully validated.`,data)) 
    }
    
 
}
export default new userCntroller()