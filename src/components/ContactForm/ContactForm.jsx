import ContactList from "../ContactList/ContactList";

const ContactForm = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactList name={name} number={number} id={id}></ContactList>
        </li>
      ))}
    </ul>
  );
};

export default ContactForm;
