import customError from "../utility/customError.js";
import _ from 'lodash';
class userService {
    async featchProfile(req,res){
        let data = {
            name:"ABDULLAH AJIBADE",
            github:"@ajibadeabd",
            email:"ajibadeabd@gmail.com",
            mobile:"08090903620",
            twitter:"@kordfootwear",
        }
        return data
    }
    async validate_rule(req,res){
        if(!req.body.data)
         throw new customError('data is required.')
         if(!req.body.rule) 
         throw new customError('rule   is required.')
         if(Array.isArray(req.body.rule))
        //  throw new customError('nah array')
         throw new customError('rule should be an object.')


         if(typeof(req.body.rule)!='object')
         throw new customError('rule should be an object.')
        //  console.log(req.body.rule["field"] ==0)
        if(req.body.rule.field<0)
         throw new customError('rule field  can not be a negative integer.')
            if(req.body.rule.condition_value==0 || req.body.rule.field==0 || req.body.rule.condition==0){

        }else{
            if(!req.body.rule.condition_value ) 
         throw new customError('rule condition_value   is required.')
            
         if(!req.body.rule.field ) 
         throw new customError('rule field   is required.')
        }
        
        let condition_type =    ['eq','neq','gt','gte','contains'] 
        if(!condition_type.includes(req.body.rule.condition)){
        throw new customError(`you have pased and invalid condition,condition type must be either be 'eq','neq','gt','gte','contains'.`)
    }

    // declear the re usable function
    let validator=(condition,condition_value,condition_field)=>{
        let result=''
        if(condition=='eq'){result =( condition_value==condition_field);return result}
        if(condition=='neq'){result =( condition_value!=condition_field);return result}
        if(condition=='gt'){result =( condition_value<condition_field);return result}
        if(condition=='gte'){result =( condition_value<=condition_field);return result}
        if(condition=='contains'){result =( condition_value==condition_field);return result}
    }

               if(typeof req.body.data =='string'){
                let str=req.body.data.split("")
                    if(isNaN(req.body.rule.field)){
            throw new customError(`field ${req.body.rule.field} does not exist.`,400,null)
    }
           if(!isNaN(req.body.rule.field)){
               if(!str[req.body.rule.field]){
                throw new customError(`field ${req.body.rule.field} is missing from data.`,400,null)

               }
              
   let  validateObj = validator(req.body.rule.condition,req.body.rule.condition_value,
    str[req.body.rule.field])

            if(validateObj){
                return{ validation: {
                  
                    "error":false,
                    field:` ${req.body.rule.field}`,
                    field_value:`${str[req.body.rule.field]}`,
                    condition:req.body.rule.condition,
                    condition_value:req.body.rule.condition_value
                }}
            }else{
                throw new customError(`field ${req.body.rule.field} failed for validation.`,400,{ 
                    validation: {
                  "error":true,
                  field:` ${req.body.rule.field}`,
                  field_value:`${str[req.body.rule.field]}`,
                  condition:req.body.rule.condition,
                  condition_value:req.body.rule.condition_value
              }})}}}
                   if( Array.isArray(req.body.data)){
                       let data=req.body.data;
                        if(!isNaN(req.body.rule.field)){
                if(!req.body.data[req.body.rule.field]){
                    throw new customError(`field ${req.body.rule.field} is missing from data.`,400,null)
                }

               let  validate = validator(req.body.rule.condition,req.body.rule.condition_value,req.body.data[req.body.rule.field])

                if(validate){
                    return{ validation: {
                      
                        "error":false,
                        field:` ${req.body.rule.field}`,
                        field_value:`${req.body.data[req.body.rule.field]}`,
                        condition:req.body.rule.condition,
                        condition_value:req.body.rule.condition_value
                    }}
                }else{
                    throw new customError(
                        `field ${req.body.rule.field} failed for validation.`,400,{ 
                        validation: {
                      "error":true,
                      field:` ${req.body.rule.field}`,
                      field_value:`${req.body.data[req.body.rule.field]}`,
                      condition:req.body.rule.condition,
                      condition_value:req.body.rule.condition_value
                  } } ) } } 
                  if(!req.body.data.includes(req.body.rule.field)){
                    throw new customError(`field ${req.body.rule.field} is missing from data.`,400,null)  }
                  throw new customError(`field ${req.body.rule.field}  has no value  from data.`,400,null) }
                   if(typeof req.body.data =='object'){
                       if(!isNaN(req.body.rule.field)){
                        //    console.log(req.body.rule.field.trim("").lenght)
                  throw new customError(`field ${req.body.rule.field} does not exist from data.`,400,null)

                       }
                    if(isNaN(req.body.rule.field)){
                    if(req.body.rule.field.indexOf('.')>-1){
                       let field = req.body.rule.field.split(".")
                       if(req.body.data[field[0]] && req.body.data[field[0]][field[1]])
                       {
   let  validateObj = validator(req.body.rule.condition,req.body.rule.condition_value,req.body.data[field[0]][field[1]])
                              if(validateObj){
                                  return{ validation: {
                                    
                                      "error":false,
                                      field:` ${req.body.rule.field}`,
                                      field_value:`${req.body.data[field[0]][field[1]]}`,
                                      condition:req.body.rule.condition,
                                      condition_value:req.body.rule.condition_value
                                  }}
                              }else{
                                  throw new customError(`field ${req.body.rule.field} faileaad for validation.`,400,{ 
                                      validation: {
                                    "error":true,
                                    field:` ${req.body.rule.field}`,
                                    field_value:`${req.body.data[field[0]][field[1]]}`,
                                    condition:req.body.rule.condition,
                                    condition_value:req.body.rule.condition_value
                                }})}}    else{
                            throw new customError(`field ${req.body.rule.field} is missing from data.`,400,null)
                            
                        }      
                                                }
                                                if(!req.body.data[req.body.rule.field]){
                    throw new customError(`field ${req.body.rule.field} is missing from data.`,400,null)
                                            }
                                           
   let  validateObj = validator(req.body.rule.condition,req.body.rule.condition_value,req.body.data[req.body.rule.field])

                                            if(validateObj){
                                                return{ validation: {
                                                  
                                                    "error":false,
                                                    field:` ${req.body.rule.field}`,
                                                    field_value:`${req.body.data[req.body.rule.field]}`,
                                                    condition:req.body.rule.condition,
                                                    condition_value:req.body.rule.condition_value
                                                }}
                                            }else{
                                                throw new customError(
                                                    `field ${req.body.rule.field} failed for validation.`,400,{ 
                                                    validation: {
                                                  "error":true,
                                                  field:` ${req.body.rule.field}`,
                                                  field_value:`${req.body.data[req.body.rule.field]}`,
                                                  condition:req.body.rule.condition,
                                                  condition_value:req.body.rule.condition_value
                                              } } ) }
                                            }
                }
    }
    


}

export default new userService()
 