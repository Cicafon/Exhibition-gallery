import React from "react";
import classes from "./LoadingSpinner.module.css";
import { ThreeDots } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className={classes.loader}>
      <ThreeDots height="50" width="50" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default LoadingSpinner;
