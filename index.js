const express = require('express') // by this we import a express library.
const app = express();

port = 4000;

app.get('/',(req, res)=>{
    res.send('Muhammad Usama');
}) // now at this point our Api is create.

app.listen(port,()=>{
    console.log('Server is running!') // this is response.
})