import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <FaUser /> {name}
          </p>
          <p>
            <FaPhoneAlt /> {number}
          </p>
          <button onClick={() => onClick(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
