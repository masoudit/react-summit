import { t } from "i18next";
import React from "react";
const HeaderAuth = () => {
  return (
    <a
      href='#'
      className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
    >
      <img className='w-10 h-10 mr-2' src={"/logo-demo.png"} alt='logo' />
      {t("appName")}
    </a>
  );
};

export default HeaderAuth;
