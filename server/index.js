//step 1 REQUIREMENTS/IMPORTS
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//MIDDLEWARE-----------------------
app.use(cors());

//getting data from the client side
//from the request.body obj
app.use(express.json()); //req.body

//ROUTES----------
//create a todo

app.post("/todos", (req, res) => {
    //await = wait for a function to execute 
    try {

        


    } catch (err){
        console.error(err.message);
    }
    
})

//get all todos


//get a todo


//update a todo 


//delete a todo





//SERVER------------------------------
app.listen(5000, () => {
    console.log("server started and is on port 5000");
});


