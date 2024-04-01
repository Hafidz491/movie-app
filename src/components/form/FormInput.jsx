import Label from "./Label";
import Input from "./Input";

const FormInput = ({ name, label, type, placeholder, value, onChange
 }) => {
  return (
    <div className="mb-2">
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
