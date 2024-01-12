import { useAuthStore } from "@src/app/local/authStore";
import HeaderAuth from "@src/components/auth/HeaderAuth";
import ToastContainerCustom from "@src/components/utils/toastify";
import Button from "@src/kits/Button";
import InputCheckbox from "@src/kits/InputCheckox";
import InputEmail from "@src/kits/InputEmail";
import InputText from "@src/kits/InputText";
import { t } from "i18next";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const d = await login(_.trim(data.email), _.trim(data.password));
    if (d?.response && d?.response.success) {
      // redirect to dashboard
    } else {
      toast.error(
        t(d?.response.errorMessage || "Email Or Password Is Invalid!"),
        {
          toastId: 1,
          updateId: 1,
        },
      );
    }
  };

  return (
    <section className='bg-gray-50'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <HeaderAuth />
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <div className='text-gray-500 text-sm'>
              <b>Demo: </b>demo@masoudit.com | demMo@123
            </div>
            <form
              className='space-y-1 md:space-y-2'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <InputEmail
                  title='Email'
                  name='email'
                  register={register}
                  options={{ errors }}
                  required
                />
              </div>
              <div>
                <InputText
                  title='Password'
                  name='password'
                  type='password'
                  register={register}
                  options={{ errors }}
                  required
                />
              </div>
              <div className='flex items-center justify-between'>
                <InputCheckbox
                  title={"Remember me"}
                  name='remember'
                  register={register}
                  options={{ errors }}
                />
                <a
                  href='#'
                  className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-gray-400'
                >
                  Forgot password?
                </a>
              </div>
              <div className='text-center'>
                <div className='mt-5' />
                <Button title={"Sign in"} />
              </div>
              <div>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400 mt-6'>
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/register"}
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainerCustom />
    </section>
  );
};

export default Login;
