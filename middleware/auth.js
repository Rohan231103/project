var jwt = require('jsonwebtoken');    //token

exports.check_token = async (req,res,next) => {
    jwt.verify(req.headers.authorization,"cdmi",next)
}