import React from "react";
import s from "./FormsControl.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={`${s.wrapper} ${hasError ? s.error : undefined}`}>
      <textarea {...props} {...input} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={`${s.wrapper} ${hasError ? s.error : undefined}`}>
      <input {...props} {...input} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
