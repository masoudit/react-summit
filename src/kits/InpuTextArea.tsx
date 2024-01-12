import { IInputProps } from "@src/app/utils/interfaces";
import { t } from "i18next";
import React from "react";

const InputTextArea = (props: IInputProps) => {
  const { title, required, options, register, name } = props;
  const errors = options?.errors;
  const rg = register ? register(name, { required: required }) : {};
  const title_ = t(title);
  const hasError = errors && errors[name];

  return (
    <div className='form-control w-full'>
      <label className='label'>
        <h4 className='text-md label-text'>
          {title_}
          {required ? <b className=''>*</b> : null}
        </h4>
      </label>
      <textarea
        {...rg}
        className={`textarea textarea-bordered h-24 ${
          hasError ? "textarea-error" : ""
        }`}
        placeholder={t("Description")}
      ></textarea>
    </div>
  );
};

export default InputTextArea;
