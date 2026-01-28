<<<<<<< HEAD
import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show mt-5`}
        role="alert"
      >
        <strong>
          {" "}
          {capitalize(props.alert.type)} : {props.alert.msg}
        </strong>
      </div>
    )
  );
}

export default Alert;
=======
import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show mt-5`}
        role="alert"
      >
        <strong>
          {" "}
          {capitalize(props.alert.type)} : {props.alert.msg}
        </strong>
      </div>
    )
  );
}

export default Alert;
>>>>>>> ffab79dea8f7b2f7fb0c673ecaa0c6ab8c06ec5f
