/* eslint-disable import/no-unresolved */
import React, { useMemo } from "react";
import iconBack from "@assets/icon-back.svg";
import iconAdd from "@assets/icon-add.svg";
import iconOpenEye from "@assets/icon-eye.svg";
import iconOpenEyeClose from "@assets/icon-eye-close.svg";

interface IProps {
  name: "IconBack" | "IconAdd" | "OpenEye" | "CloseEye";
  width?: string;
  height?: string;
}
const Icon = (props: IProps) => {
  const imgUrl = useMemo(() => {
    if (props.name == "IconBack") {
      return iconBack;
    }
    if (props.name == "IconAdd") {
      return iconAdd;
    }
    if (props.name == "OpenEye") {
      return iconOpenEye;
    }
    if (props.name == "CloseEye") {
      return iconOpenEyeClose;
    }
  }, [props.name]);

  return (
    <>
      <img
        src={imgUrl}
        style={{ width: props.width || 24, height: props.height || 24 }}
      />
    </>
  );
};

export default Icon;
