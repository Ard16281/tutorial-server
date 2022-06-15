const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse content-type - applications/json
app.use(bodyParser.json());
//parse requests of content-type- applications/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true}));
//simple route
app.get("/", (req,res)=> {

   return res.json({message:"Welcome to nagendra applications."});
});
require("./routers")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}.`);
});

const db = require("./models/index");
db.mongoose
    .connect(db.url, {
        // userNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });