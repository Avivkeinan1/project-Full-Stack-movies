const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");
const bcrypt = require("bcrypt");
const authMW = require("../middleware/auth");

router.get("/me", authMW, async (req, res) => {
  const user = await User.findOne(req.user._id).select("-password");
  res.send(user);
});

router.get("/allUsers", authMW, async (req, res) => {
  if (!req.user.admin) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const allUsers = await User.find({ admin: false });
    res.send(allUsers);
  } catch (error) {
    res.status(500).send("Error Can't Fetching Users");
  }
});

// router.patch("/authorizeAdmin/:_id", authMW, async (req, res) => {
//   if (!req.user.admin) {
//     return res.status(404).send("unauthorized");
//   }
//   const user = await User.find({ _id: req.body._id });
//   if (!user) {
//     return res.status(400).send("no user found");
//   }

//   res.send(
//     await User.findOneAndUpdate(
//       { _id: req.body._id },
//       { admin: true },
//       { new: true }
//     )
//   );

//   res.send(User.find());
// });

router.delete("/delete/:id", authMW, async (req, res) => {
  const userId = req.params.id;

  const user = await User.findOne({ _id: userId });
  if (!req.user.admin) {
    return res.status(404).send("unauthorized");
  }
  if (!user) {
    return res.status(404).send("The user with the given ID was not found.");
  }

  const deletedUser = await User.findByIdAndRemove(userId);
  res.send(deletedUser);
});

router.post("/", async (req, res) => {
  // validate user input
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  //validate system requirements
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("User Already Register");
    return;
  }

  //process
  user = await new User({
    ...req.body,
    password: await bcrypt.hash(req.body.password, 12),
    image: req.body.image
      ? req.body.image
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  }).save();
  //response
  res.send(user);
});

module.exports = router;
