# express -crud
一个简单的基于Express的学生管理系统
没有使用数据库 直接对文件读写来完成数据操作
练习项目

#模块设计
app.js 应用入口
router.js 路由操作模块
student.js 数据操作模块

## 起步
- 初始化
- 模板处理

## 路由设计

|路由方法|请求路径      | get参数 | post参数 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| get | /students |      |      | 渲染首页 |
| get | /students/new |      |     | 渲染添加学生 |
| post | /students/new |      |    name、age、gender、hobbies   | 处理添加学生 |
| get | /students/edit |    | 渲染编辑页面 ||
| post | /student/edit | id、name、age、gender、hobbies |  处理编辑页面  ||
| delete | /student/delete | | |处理删除请求|
