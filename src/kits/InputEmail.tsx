import { IInputProps } from "@src/app/utils/interfaces";
import { t } from "i18next";
import React from "react";

const InputEmail = (props: IInputProps) => {
  const { title, register, name, options, required, showRequired } = props;
  const errors = options?.errors;
  const rg = register
    ? register(name, {
        required: required,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      })
    : {};
  const hasError = errors && errors[name];

  return (
    <div>
      <div className='form-control w-full max-w-md'>
        <label className='label'>
          <h4 className='label-text text-white'>
            {t(title)}
            {showRequired ? <b className=''>*</b> : ""}
          </h4>
        </label>
        <input
          {...rg}
          dir='ltr'
          name={name}
          placeholder='example@email.com'
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            hasError ? "input-error" : ""
          }`}
        />
        <label className='label'>
          {hasError && (
            <span className='label-text-alt text-red-600 text-sm'>
              {t(errors[name]?.message)}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default InputEmail;
