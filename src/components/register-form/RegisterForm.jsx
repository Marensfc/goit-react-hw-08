import css from "./RegisterForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useId } from "react";

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
    .max(15, "Must be no more than 15 characters")
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
  const fieldNameId = useId();
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
      validationSchema={registerSchema}
    >
      <Form>
        <div>
          <label htmlFor={fieldNameId}>Name</label>
          <Field name="name" placeholder="Name" id={fieldNameId} />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div>
          <label htmlFor={fieldEmailId}>Email</label>
          <Field
            type="email"
            name="email"
            id={fieldEmailId}
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div>
          <label htmlFor={fieldPasswordId}>Password</label>
          <Field
            type="password"
            name="password"
            id={fieldPasswordId}
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
