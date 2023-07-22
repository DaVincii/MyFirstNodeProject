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
  
app.listen(80, (error) => {
    if(!error)
        consol.log("Server started Successfully"); 
    else 
        console.log("Server failed to start:", error);
    }
);