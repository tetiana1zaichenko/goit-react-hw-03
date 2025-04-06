import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
const Contact = ({ id, name, number, onClick }) => {
  return (
    <div className={s.cart}>
      <p className={s.contactText}>
        <FaUser /> {name}
      </p>
      <p className={s.contactText}>
        <FaPhoneAlt /> {number}
      </p>
      <button className={s.button} onClick={() => onClick(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
