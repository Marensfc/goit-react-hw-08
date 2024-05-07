import css from "./ContactForm.module.css";

import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be no more than 50 characters")
    .trim()
    .required("Name is a required field"),
  number: yup
    .string()
    .matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, "must be 000-00-00 format")
    .max(9, "Must not be more than 9 digits")
    .required("Number is a required field"),
});

const ContactForm = () => {
  const fieldNameId = useId();
  const fieldNumberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const newContact = values;
    dispatch(addContact(newContact));

    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <div className={css.formInputWrapper}>
            <label htmlFor={fieldNameId}>Name</label>
            <Field name="name" id={fieldNameId} placeholder="Name" />
            <ErrorMessage
              name="name"
              component="p"
              className={css.errorMessage}
            />
          </div>

          <div className={css.formInputWrapper}>
            <label htmlFor={fieldNumberId}>Number</label>
            <Field
              type="tel"
              name="number"
              id={fieldNumberId}
              placeholder="123-45-67"
            />
            <ErrorMessage
              name="number"
              component="p"
              className={css.errorMessage}
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
