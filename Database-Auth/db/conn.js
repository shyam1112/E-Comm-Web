const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const DB = "mongodb+srv://shyam1112:shyam1112@Authusercluster0.m5egl9t.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})