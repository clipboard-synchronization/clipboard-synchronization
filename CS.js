var http = require('http')
var server = http.createServer()
var 剪切板 = "";
server.on('request', function (request, response) {
  var datas = decodeURI(request.url);
  datas = datas.slice(1,datas.lenght)
  
  //直接把路径作为请求(懒)
  console.log('收到请求了，请求路径是：' + datas)
  
  var datajson = JSON.parse(datas)
  var 返回变量 = {};
  //转换为json对象
  if(datajson.todo == "写入"){
  剪切板 = datajson.content;
  返回变量.concent = "ok"
  
  //将 "内容" 保存在，剪切板
  
  }else if(datajson.todo == "读取"){
  返回变量.todo = "剪切板";
  返回变量.content = 剪切板;
  }else if(datajson.todo == "任务"){
  //以后再写，类似iOS接力的实现
  }
  
 var 返回 = JSON.stringify(返回变量)
 console.log(返回)
 response.setHeader('Content-Type', 'text/html; charset=utf-8')
 response.end(返回)
  //发送给客户端
  response.end()
})

server.listen(80, function () {
  console.log('服务器启动成功，在客户端设置 服务器IP')
})
