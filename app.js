const dotenv = require("dotenv");

const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const path = require("path");
// const verifyJWT = require('./middleware/verifyJWT');
const app = express();


dotenv.config({ path: './config.env' });

require('./db/conn');

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
app.use("/admin/posts", require('./adminpanel/routes/post'))
const PORT = process.env.PORT;

app.get("/signup", (req, res) => {
  res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});
