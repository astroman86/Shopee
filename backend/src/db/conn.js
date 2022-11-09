const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/student-api?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection b/w MongoDB successful");
}).catch((e)=>{
    console.log(`Error in creating Connection ${e}`);
});