import { useAuthStore } from "@src/app/local/authStore";
import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = useAuthStore((state) => state.logout);

  const onLogout = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure for logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            logout();
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className='navbar sticky bg-neutral text-white'>
      <div className='flex-1'>
        <Link to={"/dashboard"} className='btn btn-ghost text-xl'>
          React Summit Project
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary>Profile</summary>
              <ul className='p-2 bg-base-100 rounded-t-none text-gray-500'>
                <li onClick={() => onLogout()}>
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
