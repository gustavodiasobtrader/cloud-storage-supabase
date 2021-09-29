import React from "react";
import "./CustomInput.scss";

interface IProps {
  name: string;
  value: string;
  label: string;
  showValidations: boolean;
  isValid?: boolean;
  type?: string;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props: IProps) => {
  return (
    <>
      <div className="custom-input-wrapper">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type ? props.type : "text"}
          name={props.name}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
    </>
  );
};

export default CustomInput;
