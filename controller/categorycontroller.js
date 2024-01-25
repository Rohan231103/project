var cat = require('../model/category');
var subcat = require('../model/subcat');

exports.cat_insert = async (req,res) => {
    var data = await cat.create(req.body);
    res.status(200).json({
        status:"data insert",
        data
    })
}

exports.sub_cat_insert = async (req,res) => {
    var data = await subcat.create(req.body);
    res.status(200).json({
        status:"data insert",
        data
    })
}

exports.get_cat = async (req,res) => {
    var data = await cat.find();
    res.status(200).json({
        data
    })
}

exports.get_subcat = async (req,res) => {
    var data = await subcat.find().populate("cat_id");
    res.status(200).json({
        data
    })
}