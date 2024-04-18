require("dotenv").config();
const express = require("express")
const cors= require("cors");
const passportSetup = require("./passport")
const passport = require("passport")
const cookieSession = require("cookie-session")
const authRoute = require("./routes/auth")

const app = express();

app.use(
    cookieSession({
        name:"session",
        keys:["cyberwolve"],
        maxAge:24*60*60*100,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:"http://localhost:5173/",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use("/auth",authRoute)

const port = process.env.PORT ||8080;
app.listen(port,()=>console.log(`Listening on port ${port}......`))