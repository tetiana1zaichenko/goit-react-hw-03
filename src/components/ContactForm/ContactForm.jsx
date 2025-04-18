import { Formik, Form, Field } from "formik";
import ContactList from "../ContactList/ContactList";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onClick }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    console.log(newContact);
    onClick(newContact);
    actions.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div>
            <label className={s.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label className={s.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={s.input}
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage name="number" component="span" />
          </div>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
