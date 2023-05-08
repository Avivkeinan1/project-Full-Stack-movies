import HandleHomeCopy from "../common/pageHeader";
import Input from "../common/input";
import { useFormik } from "formik";
import formUsingJoi from "../utils/formikusingjoi";
import Joi from "joi";
import { createUser } from "../services/userServices";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
      img: "",
    },
    validate: formUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .email({ tlds: { allow: false } })
        .required(),
      name: Joi.string().min(2).max(255).required(),
      password: Joi.string().min(6).max(255).required(),
      img: Joi.string().min(6).max(2550).allow(""),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: false });
        toast("Your Account Is Ready 👏");
        navigate("/login");
      } catch ({ response }) {
        if (response.status === 400) {
          console.log(response.data);
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <HandleHomeCopy title="Sign-Up Here" description="only to day its free" />
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          label="Email"
          {...form.getFieldProps("email")}
          name="email"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          label="Password"
          {...form.getFieldProps("password")}
          name="password"
          required
          error={form.touched.password && form.errors.password}
        />
        <Input
          label="Name"
          {...form.getFieldProps("name")}
          name="name"
          required
          error={form.touched.name && form.errors.name}
        />
        <Input label="Image" {...form.getFieldProps("image")} name="img" />

        <button
          type="submit"
          style={{ backgroundColor: "gray" }}
          className="btn"
        >
          Sign-Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
