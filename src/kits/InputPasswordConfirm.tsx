import { IInputProps } from "@src/app/utils/interfaces";
import { t } from "i18next";
import React, { useState } from "react";

const InputPasswordConfirm = (props: IInputProps) => {
  const {
    title,
    required,
    options,
    register,
    name,
    type,
    showRequired,
    watch,
  } = props;
  const errors = options?.errors;
  const rg = register(name, {
    required: required,
    validate: (value: string) =>
      value === watch("password", "") || "The passwords do not match",
  });
  const hasError = errors && errors[name];
  const [showCode, setShowCode] = useState(false);

  return (
    <div>
      <div className='form-control w-full max-w-md'>
        <label className='label' htmlFor='email'>
          <h4 className='label-text text-white'>
            {t(title)}
            {showRequired ? <b className=''>*</b> : null}
          </h4>
        </label>
        <div className='relative' dir={"ltr"}>
          <input
            {...rg}
            type={showCode ? "text" : type || "text"}
            name={name}
            placeholder={`${title}`}
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              hasError ? "input-error" : ""
            }`}
          />
          {type === "password" ? (
            <button
              onClick={() => setShowCode(!showCode)}
              type='button'
              className='btn btn-ghost absolute right-0 bottom-0 text-xl '
            >
              {/* {showCode ? <EyeOutlined /> : <EyeInvisibleOutlined />} */}
            </button>
          ) : (
            false
          )}
        </div>
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

export default InputPasswordConfirm;
