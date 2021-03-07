interface IFormInputProps {
  id: string;
  placeholder?: string;
  value: string;
  handleChange: Function;
}

const FormInput = (props: IFormInputProps) => {
  const { id, placeholder, value, handleChange } = props;
  return (
    <input
      id={id}
      value={value}
      onChange={(e) => handleChange(e)}
      type="text"
      className="rl-form-input"
      placeholder={placeholder}
      autoComplete={"off"}
    />
  );
};

export default FormInput;
