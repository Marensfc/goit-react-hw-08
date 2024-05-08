// import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is a required field!"),
  password: yup.string().required("Password is a required field!"),
});

const LoginForm = () => {
  const fieldEmailId = useId();
  const fieldPasswordId = useId();

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form>
        <div>
          <label htmlFor={fieldEmailId}>Email</label>
          <Field type="email" name="email" id={fieldEmailId} />
        </div>
        <div>
          <label htmlFor={fieldPasswordId}>Password</label>
          <Field type="password" name="password" id={fieldPasswordId} />
        </div>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
