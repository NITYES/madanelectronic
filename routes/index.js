const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const {validateCustomerData,isCustomerDataValidated}=require('../middleware/formvalidator')


router.get('/', (req, res) => {
    res.render('index', { title: "Home", message: "" })
})


//save the customer information
router.post('/', validateCustomerData,isCustomerDataValidated,async (req, res) => {
    const { name, mobile, address, product } = req.body;


    const customer = await Customer.findOne({ mobile: mobile });
    if (customer) {
        //update the information
        Customer.findOneAndUpdate({ mobile: mobile }, {
            $set: {
                name: name,
                address: address,
                product: product
            }
        }).exec((error) => {
            if (error) {
                console.log(error)
                res.render('index', { title: "Home", message: "" })

            } else {
                res.render('index', { title: "Home", message: "Thanks for Submitting Details." })

            }
        })



    } else {
        //create new customer
        const newCustomer = new Customer({
            name,
            mobile,
            address,
            product
        })

        newCustomer.save((error, customer) => {
            if (error) return res.render('index', { title: "Home", message: "" })


            res.render('index', { title: "Home", message: "Thanks for Submitting Details." })
        })

    }

})

module.exports = router