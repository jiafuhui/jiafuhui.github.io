var http=require('http');
var querystring=require('querystring');
//启动服务
http.createServer((req,res)=>{
    console.log("request already come");
    var post = "";
    req.on('data',(chunk)=>{
        post += chunk;
    });
    req.on('end',()=>{
        //querystring.parse  将字符串转换为json的格式
        post =  querystring.parse(post);
        console.log('complete complished');
        //返回请求者一个信息
        res.write(post.name);
        res.end();
    });
}).listen(3000);

//将一个对象转换为json的字符串
var contents  =  querystring.stringify({
    name:'helios',
    age:21,
    address:'changsha'
});
//声明请求的参数 options
var options={
    host:'localhost',
    path:'/',
    port:3000,
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
};


//开始发送请求
var req  =  http.request(options,(res)=>{
    res.setEncoding('utf-8');
    res.on('data',(data)=>{
        console.log('return :');
        console.log(data);
    });

});

req.write(contents);
req.end();