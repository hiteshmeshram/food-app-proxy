const express = require('express')
const cors = require('cors')


const app = express();
const PORT = 3000;
app.use(cors())

app.get('/data',(req,res)=>{
    res.json("data ")
})

app.get('restaurant',async (req,res)=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();

    res.json({json})
})

app.listen(PORT,()=>console.log(`server running on port${PORT}`))