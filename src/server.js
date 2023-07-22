const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.post('/me', (req, res)=>{
    let body = req.body;
    res.send('Hello ' + body.name);
});
  
app.listen(3000, (error) => {
    if(!error)
        console.log("Server started Successfully222222"); 
    else 
        console.log("Server failed to start:", error);
    }
);