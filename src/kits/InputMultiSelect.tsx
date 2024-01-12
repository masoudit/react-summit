import { ISelectProps } from "@src/app/utils/interfaces";
import { t } from "i18next";
import React from "react";
import Select from "react-select";

const InputMultiSelect = (props: ISelectProps) => {
  const { title, required, options, register, name, items, disabled } = props;
  const errors = options?.errors;
  const rg = register ? register(name, { required: required }) : {};
  const title_ = t(title);
  const hasError = errors && errors[name];

  return (
    <div className='form-control w-full'>
      {/* <div className="form-control w-full max-w-lg"> */}
      <label className='label'>
        <h4 className='label-text text-md'>
          {title_}
          {required ? <b className=''>*</b> : null}
        </h4>
      </label>
      <Select
        {...rg}
        name={name}
        isMulti
        className={`${hasError ? "select-error" : ""}`}
        isDisabled={disabled}
        options={items}
        onChange={(r) => {
          options.setValue(name, r);
        }}
      />
      <label className='label hidden'>
        <span className='label-text-alt'>Alt label</span>
      </label>
    </div>
  );
};

export default InputMultiSelect;
