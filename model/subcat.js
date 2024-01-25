var mongoose = require('mongoose');

var subcatschema = new mongoose.Schema({
    sub_cat_name:{
        type:String
    },
    cat_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cat"
    }
});

module.exports = mongoose.model("subcat",subcatschema)