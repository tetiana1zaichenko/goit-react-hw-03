import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {
            <Contact
              id={id}
              name={name}
              number={number}
              onClick={onClick}
            ></Contact>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
