const mongoose = require("mongoose");
const Joi = require("joi");
const JWT = require("jsonwebtoken");
const { JWTSecretToken } = require("../configs/config");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  biz: {
    type: Boolean,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
    required: true,
  },
  img: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
});

userSchema.methods.generateToken = function () {
  return JWT.sign(
    { _id: this._id, biz: this.biz, admin: this.admin },
    JWTSecretToken
  );
};

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(10).max(255).email().required(),
    password: Joi.string().min(6).max(255).required(),
    biz: Joi.boolean().required(),
    img: Joi.string().min(6).max(2550).allow(""),
  });
  return schema.validate(user);
};

module.exports = {
  User,
  validateUser,
};
