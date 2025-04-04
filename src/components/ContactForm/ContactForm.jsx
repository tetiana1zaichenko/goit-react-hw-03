import { Formik, Form, Field } from "formik";
import ContactList from "../ContactList/ContactList";
import { useId } from "react";

const initialValues = {
  username: "",
  email: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="number" name="number" id={numberFieldId} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
