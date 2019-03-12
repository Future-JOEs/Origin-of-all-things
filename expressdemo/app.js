// 启动服务
// 配置模板引擎
// 解析表单post请求体
// 提供静态资源服务
// 挂载路由
var express = require('express')
var router=require('./router')
var bodyParser=require('body-parser')

var app = express()
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
//配置模板引擎
app.engine('html', require('express-art-template'))
//配置body-parser 解析post请求
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//把路由容器挂载到app服务中
app.use(router)
app.listen(3000, function () {
  console.log('running 3000...')
})
module.exports=app