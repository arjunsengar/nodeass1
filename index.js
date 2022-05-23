const http =require('http');
//require() is built in function to include function it is very important  to creating server


http.createServer((req,res)=>{   // creating a server

 res.write("HELLO WORLD");  //sending response backend to frontend and we also send any type like json & html file

res.write("<h1>Welcome To Pune</h1>") //passing in html formate

res.write(JSON.stringify({name:"arjun",age:25}))  //pass data in json formate

res.end();  
}).listen(8080);  //this a is port number(8080) where we run the code 

