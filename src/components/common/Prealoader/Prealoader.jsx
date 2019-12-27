import React from "react";
import preloader from "../../../assets/svg/preloader.svg";
import s from "./Preloader.module.css";

let Preloader = props => {
  return (
    <div className={s.preloaderWrapper}>
      <img src={preloader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
