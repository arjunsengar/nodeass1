const http =require('http');
//require() is built in function to include function it is very important  to creating server


http.createServer((req,res)=>{   //here creating a server this is Es5 version

 res.write("HELLO WORLD");  //here sending response backend to frontend here also send any type like json and html file

res.write("<h1>Welcome To Pune</h1>") //send data in html formate

res.write(JSON.stringify({name:"arjun",age:25}))  //send data  in json formate

res.end();  //this is require  to end the server
}).listen(8080);  //and this is port number where the code run meance type in url 8000 then run the code


//any change in this code then require to restart the server