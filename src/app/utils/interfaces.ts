/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IInputProps {
  title: string;
  name: string;
  register: any;
  options?: any;
  required?: boolean;
  type?: "email" | "text" | "password";
  disabled?: boolean;
  showRequired?: boolean;
  watch?: any;
  children?: any;
}
