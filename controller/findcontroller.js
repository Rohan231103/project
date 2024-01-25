var demo = require('../model/usermodel');

exports.users = async(req,res) => {
    
    var data = await demo.find();

    res.status(200).json({
        status:"success",
        data
    })
}