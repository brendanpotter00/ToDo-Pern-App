//step 1
const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());

//getting data from the client side
//from the request.body obj
app.use(express.json());



app.listen(5000, () => {
    console.log("server started and is on port 5000");
});

//next create a database and table in postgres

