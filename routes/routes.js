const users = require("./users.route");
module.exports = function(app){
    app.use("/api/users", users);
    app.get("/", (req, res)=>{
        res.send("Home")
    });
}