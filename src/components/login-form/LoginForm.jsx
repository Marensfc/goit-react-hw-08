import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";

import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is a required field!"),
  password: yup.string().required("Password is a required field!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const fieldEmailId = useId();
  const fieldPasswordId = useId();

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <label htmlFor={fieldEmailId}>Email</label>
          <Field
            type="email"
            name="email"
            id={fieldEmailId}
            className={css.inputField}
          />
        </div>
        <div className={css.fieldWrapper}>
          <label htmlFor={fieldPasswordId}>Password</label>
          <Field
            type="password"
            name="password"
            id={fieldPasswordId}
            className={css.inputField}
          />
        </div>
        <button type="submit" className={css.buttonLogin}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
