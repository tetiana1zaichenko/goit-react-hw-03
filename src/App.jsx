import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredContacts = inputValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(inputValue.toLowerCase())
      )
    : contacts;

  // спросить за эти строчки как сюда попадает новый контакт?
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const newDate = contacts.filter((item) => item.id !== id);
    setContacts(newDate);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onClick={addContact} />
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList onClick={deleteContact} contacts={filteredContacts} />
    </div>
  );
};

export default App;
