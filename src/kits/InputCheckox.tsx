import { IInputProps } from "@src/app/utils/interfaces";
import React from "react";

const InputCheckbox = (props: IInputProps) => {
  const { title, required, register, name, children, options } = props;
  const rg = register ? register(name, { required: required }) : {};
  const errors = options?.errors;
  const hasError = errors && errors[name];

  return (
    <div className='form-control' dir='ltr'>
      <label className='cursor-pointer label justify-end gap-2'>
        <input
          type='checkbox'
          {...rg}
          //   checked="checked"
          className={`checkbox checkbox-success checkbox-md ${
            hasError ? "input-error" : ""
          }`}
        />
        {children || <span className='label-text text-white'>{title}</span>}
      </label>
    </div>
  );
};

export default InputCheckbox;
