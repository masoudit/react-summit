import { ISelectProps } from "@src/app/utils/interfaces";
import { t } from "i18next";
import React from "react";

const InputSelect = (props: ISelectProps) => {
  const { title, required, options, register, name, items, disabled } = props;
  const errors = options?.errors;
  const rg = register ? register(name, { required: required }) : {};
  const title_ = t(title);
  const hasError = errors && errors[name];
  return (
    <div className='form-control w-full'>
      {/* <div className="form-control w-full max-w-lg"> */}
      <label className='label'>
        <h4 className='label-text text-lg'>
          {title_}
          {required ? <b className=''>*</b> : null}
        </h4>
      </label>
      <select
        {...rg}
        disabled={disabled}
        className={`select select-bordered ${hasError ? "select-error" : ""}`}
      >
        <option disabled selected value={-1}>
          {t("selectOption")}
        </option>
        {items.map((item: any) => (
          <option key={item.value} value={item.value}>
            {t(`${name}Options.${item.label}`)}
          </option>
        ))}
      </select>
      <label className='label hidden'>
        <span className='label-text-alt'>Alt label</span>
      </label>
    </div>
  );
};

export default InputSelect;
