import HandleHomeCopy from "../common/pageHeader";
import Input from "../common/input";
import { useFormik } from "formik";
import formUsingJoi from "../utils/formikusingjoi";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { login: loginUser, user } = useAuth();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().min(6).max(255).required(),
    }),
    async onSubmit(values) {
      try {
        await loginUser(values);
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <HandleHomeCopy title="login here" />

      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
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
        <button
          style={{ backgroundColor: "gray" }}
          type="submit"
          className="btn"
        >
          login
        </button>
      </form>
    </>
  );
};
export default Login;
