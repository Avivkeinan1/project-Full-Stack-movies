const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const moviesRouter = require("./routes/movies");
const path = require("path");

const cors = require("cors");

app.get("/", (req, res) => {
  res.sendFile("home.jsx", {
    root: "../front-end\\final-project\\src\\components",
  });
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/my_rest_api")
  .then(console.log("connected to the server"))
  .catch((err) => console.log("could not connect to the server", err));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/movies", moviesRouter);

// app.get("/test", async (req, res) => {
//   const u = new User({
//     biz: false,
//     email: "avivkenan043@gmail.com",
//     password: "7419999",
//     name: "aviv",
//   });
//   u.save();
//   console.log(await User.find({ email: "avivkenan043@gmail.com" }));
//   res.send(u);
// });
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
