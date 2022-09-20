var expr=require("express")
var app=expr()
app.get("/",(req,res)=>{

res.send("hhdhdhdhdh")
})
app.get("/home",(req,res)=>{
res.send("Home page")

})

app.listen(process.env.PORT || 5000)
