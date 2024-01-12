import { useAuthStore } from "@src/app/local/authStore";
import HeaderAuth from "@src/components/auth/HeaderAuth";
import ToastContainerCustom from "@src/components/utils/toastify";
import Button from "@src/kits/Button";
import InputCheckbox from "@src/kits/InputCheckox";
import InputEmail from "@src/kits/InputEmail";
import InputPasswordConfirm from "@src/kits/InputPasswordConfirm";
import InputText from "@src/kits/InputText";
import { t } from "i18next";
import _ from "lodash";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const registerFunction = useAuthStore((state) => state.register);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const d = await registerFunction(
      _.trim(data.email),
      _.trim(data.password),
      _.trim(data.confirmPassword),
    );
    if (d?.response && d?.response.success) {
      // redirect to login
      toast.success(t("Thank you for registering, Please confirm email!"), {
        toastId: 1,
        updateId: 1,
      });
      setTimeout(() => {
        nav("/login");
      }, 3000);
    } else {
      toast.error(t(d?.response.errorMessage || "Please Try Again!"), {
        toastId: 1,
        updateId: 1,
      });
    }
  };

  return (
    <section className='bg-gray-50'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <HeaderAuth />
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create and account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <InputEmail
                  title='Email'
                  name='email'
                  register={register}
                  options={{ errors }}
                  required
                  showRequired
                />
              </div>
              <div>
                <InputText
                  title='Password'
                  name='password'
                  type='password'
                  register={register}
                  options={{ errors }}
                  showRequired
                  required
                />
              </div>
              <div>
                <InputPasswordConfirm
                  title='Confirm password'
                  name='confirmPassword'
                  type='password'
                  register={register}
                  options={{ errors }}
                  required
                  showRequired
                  watch={watch}
                />
              </div>
              <div className='flex items-start'>
                <InputCheckbox
                  title={"terms"}
                  name='terms'
                  register={register}
                  options={{ errors }}
                  required
                >
                  <div className='label-text text-white'>
                    I accept the{" "}
                    <a
                      className='font-medium text-primary-600 hover:underline hover:text-white'
                      href='#'
                    >
                      Terms and Conditions
                    </a>
                  </div>
                </InputCheckbox>
              </div>
              <Button title={"Create an account"} />
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{" "}
                <Link
                  to='/login'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainerCustom />
    </section>
  );
};

export default Register;
