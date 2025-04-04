import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const ContactList = ({ name, number }) => {
  return (
    <div>
      <p>
        <FaUser /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
      <button>Delete</button>
    </div>
  );
};

export default ContactList;
