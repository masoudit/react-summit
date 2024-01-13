import { ISelectProps } from "@src/app/utils/interfaces";
import { t } from "i18next";
import React from "react";
import Select from "react-select";
import "./InputMultiSelect.less";

const InputMultiSelect = (props: ISelectProps) => {
  const { title, required, options, register, name, items, disabled } = props;
  const errors = options?.errors;
  const rg = register ? register(name, { required: required }) : {};
  const title_ = t(title);
  const hasError = errors && errors[name];

  return (
    <div className='form-control w-full input-multi-select'>
      <label className='label'>
        <h4 className='label-text text-md'>
          {title_}
          {required ? <b className=''>*</b> : null}
        </h4>
      </label>
      <Select
        {...rg}
        name={name}
        classNames={{
          control: (state) =>
            hasError && !state.hasValue ? "border border-red-600" : "",
        }}
        isMulti
        isDisabled={disabled}
        options={items}
        onChange={(r) => {
          options.setValue(name, r);
        }}
      />
    </div>
  );
};

export default InputMultiSelect;
