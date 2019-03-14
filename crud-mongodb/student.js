var mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost/itcast')
var Schema = mongoose.Schema

module.exports = mongoose.model('Student', new Schema({
    name: {
        type: String,
        required:true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String
    }
}))
//导出模型构造函数