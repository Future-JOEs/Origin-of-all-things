# express -crud
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

