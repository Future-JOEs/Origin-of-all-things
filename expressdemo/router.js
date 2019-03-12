/**
 * router路由模块
 * 包装路由
 */
var fs = require('fs')
var express = require('express')
var Student = require('./student')
//创建一个包装路由的容器
var router = express.Router()
//把路由都挂载到路由容器中
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')

    })
})

router.get('/students/edit', function (req, res) {
    //获取需要编辑的学生id
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('edit.html', {
            student:student
        })
    })
    
  
})
//更新
router.post('/students/edit', function (req, res) {
  Student.update(req.body,function(err){
      if(err){
        return res.status(500).send('server error')
      }
      res.redirect('/students')
  })
})

router.get('/students/delete', function (req, res) {
 Student.deleteById(req.query.id,function(err){
     if(err){
         return res.status(500).send('server error')
     }
     res.redirect('/students')
 })
})
//把router导出
module.exports = router