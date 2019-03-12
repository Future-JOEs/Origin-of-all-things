/**
 * 数据操作模块
 * 
 * 
 */
var fs = require('fs')
var dbPath = './db.json'
/**
 * 获取学生列表
 * @param  {Function} callback 回调函数
 */
//获取所有学生
//获取异步操作结果
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}
/**
 * 根据id获取学生信息对象
 * 
 */
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, ret)
    })
}

//添加学生
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        // 添加 id ，唯一不重复
        student.id = students[students.length - 1].id + 1

        // 把用户传递的对象保存到数组中
        students.push(student)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

exports.update = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        //es6中的方法 需要接受一个函数作为参数
        //当符合条件时 终止遍历
        student.id = parseInt(student.id)
        var stu = students.find(function (item) {
            return item.id === student.id
        })

        for (var key in student) {
            stu[key] = student[key]
        }
        var fileData = JSON.stringify({
            students: students
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })


    })
}

//删除学生
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students
        //findIndex ES6 根据条件查找元素的下标
        var deleteId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        students.splice(deleteId, 1)
        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })



}