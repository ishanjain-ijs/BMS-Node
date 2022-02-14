const dotenv = require("dotenv");

const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const path = require("path");
// const verifyJWT = require('./middleware/verifyJWT');
const app = express();


dotenv.config({ path: './config.env' });

const sequelize = require('./db/conn');
require('./models')
app.use(cors());
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(cookieParser());

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));

// app.use(verifyJWT);

app.use("/posts", require("./routes/post"));
// app.use("/category", require("./router/category"));
app.use("/user", require("./routes/user"));
app.use("/comments", require("./routes/comment"));
app.use("/admin/register", require('./adminpanel/routes/register'))
app.use("/admin/auth", require('./adminpanel/routes/auth'))
app.use("/admin/posts", require('./adminpanel/routes/post'))
app.use("/admin/category", require('./adminpanel/routes/category'))

const PORT = process.env.PORT;

app.get("/signup", (req, res) => {
  res.send(`Hello Registration world from the server`);
});

sequelize.sync()
.then(result=>{
  // console.log(result);
  app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
  })
})
.catch(err => {
  console.log(err);
});

