const express = require("express");
const app = express()
const cors = require("cors");
require("dotenv").config();

const user = require("./routes/user.route");
const post = require("./routes/post.route");
const subscription = require("./routes/subscription.route");
const event = require("./routes/event.route");
const album = require("./routes/album.route");
const member = require("./routes/member.route")

// connecting with database
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shubham1810:mKQjrvgOyLBF5vG4@cluster0.5bhod07.mongodb.net/createrHouse?retryWrites=true&w=majority"
).then(()=>{
    console.warn("db connection done")
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3005;


// routes
app.use("/user", user);
app.use("/post", post);
app.use("/subscription", subscription);
app.use("/event", event);
app.use("/album", album);
app.use("/member", member);
app.listen(PORT, ()=>{
    console.log("app is running at port", PORT)
})