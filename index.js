const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());
//path => GET, POST, PUT, DELETE
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
let users = [];
let posts = []

app.get("/users", (req, res) => {
   
  res.send(users);
});

app.post("/users", (req, res) => {
  const { firstName, lastName, userName, password } = req.body;
  users.push({firstName, lastName, userName, password});
  res.send("post");
})

app.put("/users", (req, res) => {
    const {firstName, updatedName} =req.body
    users = users.map(user => 
        user.firstName === firstName ? { ...user, firstName: updatedName } : user
    );
    
  res.send("put");
});
app.delete("/users", (req, res) => {
    const {userName} = req.body
    const index = users.map((user)=>user.userName).indexOf(userName)
    users.splice(index, index+1)
  res.send("Deleted");
});

app.get("/login", (req, res) => {
    const {userName, password} = req.body;
    users.map((user)=>{
        if(user.userName == userName && user.password == password){
            res.send(user)
        }else{
            res.send("wrong password or username")
        }})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// {
//     "userName" : "12",
//     "password" : "12",
//     "firstName" : "a",
//     "lastName" : "b"
//     }

// {
//     "firstName" : "a",
//     "updatedName" : "c"
//     }