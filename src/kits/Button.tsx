import React from "react";

interface IProps {
  title: string;
}
const Button = (props: IProps) => {
  return (
    <button type='submit' className='btn btn-block'>
      {props.title}
    </button>
  );
};

export default Button;
