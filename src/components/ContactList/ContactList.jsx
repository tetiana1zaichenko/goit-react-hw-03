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

            /* <p className={s.contactText}>
            <FaUser /> {name}
          </p>
          <p className={s.contactText}>
            <FaPhoneAlt /> {number}
          </p>
          <button className={s.button} onClick={() => onClick(id)}>
            Delete
          </button> */
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
