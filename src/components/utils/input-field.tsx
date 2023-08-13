import React  from "react";

interface Props {
  value:string,
  label:string,
  name:string ,
  placeholder:string ,
  type:string,
  onChange: any
}

const InputField:React.FunctionComponent<Props> = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="input-field"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;