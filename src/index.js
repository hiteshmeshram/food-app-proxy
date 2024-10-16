const express = require('express')
const cors = require('cors')


const app = express();
const PORT = 3000;
app.use(cors())

app.get('/data',(req,res)=>{
    res.json("data ")
})

app.listen(PORT,()=>console.log(`server running on port${PORT}`))