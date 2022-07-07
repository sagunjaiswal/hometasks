const client = require('./config/connection')
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require("cors");

app.use(bodyParser.json());


app.listen(3300, ()=>{
    console.log("Server is now listening at port 3300");
})

client.connect();

const routes = require("./routes/routes");
//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})


app.use("/", routes);


