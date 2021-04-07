const {check,validationResult}=require('express-validator');
  module.exports.validateCustomerData=[

    check('name')
    .notEmpty().
    withMessage('Name is required.'),


    check('mobile')
    .notEmpty().isNumeric().withMessage('Please Enter a valid mobile number').isLength({min:10}).withMessage("Please Enter a Valid Number").isLength({max:10}).withMessage('Please Enter a valid mobile number'),


    check('address')
   .notEmpty()
    .withMessage('Please Provide your location'),

];

module.exports.isCustomerDataValidated=(req,res,next)=>{

    const errors=validationResult(req);
    if(errors.array().length > 0){
        console.log('error',errors.array()[0].msg)
        //error:errors.array()[0].msg
        return  res.render('index',{title:"Home",message:errors.array()[0].msg})
      }
    else{ 
       next();
    }
}