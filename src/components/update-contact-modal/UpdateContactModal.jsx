import css from "./UpdateContactModal.module.css";
import Modal from "react-modal";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";

Modal.setAppElement("#root");

const UpdateContactModal = () => {
  const fieldNameId = useId();
  const fieldNumberId = useId();

  return (
    <Modal>
      <Formik>
        <Form>
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
        </Form>
      </Formik>
    </Modal>
  );
};

export default UpdateContactModal;
