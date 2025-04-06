import s from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
