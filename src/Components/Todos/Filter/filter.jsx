export const Filter = ({ onChange }) => {
  return (
    <label>
      Фильтрация заметок
      <input type="text" name="text" onChange={onChange} />
    </label>
  );
};
