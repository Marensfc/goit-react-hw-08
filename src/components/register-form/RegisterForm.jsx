import css from "./RegisterForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, "Must be at least 2 characters")
    .max(18, "Must be no more than 18 characters")
    .required("Name is a required field"),
  email: yup
    .string()
    .email("Email must be valid")
    .min(5, "Must be at least 2 characters")
    .max(50, "Must be no more than 50 characters")
    .trim()
    .required("Email is a required field"),
  password: yup
    .string()
    .min(6, "Must be at least 6 characters")
    .max(20, "Must be no more than 50 characters")
    .required("Password is a required field"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const fieldNameId = useId();
  const fieldEmailId = useId();
  const fieldPasswordId = useId();

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <label htmlFor={fieldNameId}>Name</label>
          <Field
            name="name"
            placeholder="Name"
            id={fieldNameId}
            className={css.inputField}
          />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div className={css.fieldWrapper}>
          <label htmlFor={fieldEmailId}>Email</label>
          <Field
            type="email"
            name="email"
            id={fieldEmailId}
            placeholder="Email"
            className={css.inputField}
          />
          <ErrorMessage
            name="email"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div className={css.fieldWrapper}>
          <label htmlFor={fieldPasswordId}>Password</label>
          <Field
            type="password"
            name="password"
            id={fieldPasswordId}
            placeholder="Password"
            className={css.inputField}
          />
          <ErrorMessage
            name="password"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <button type="submit" className={css.buttonRegister}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
