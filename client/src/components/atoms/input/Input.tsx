import React from "react";
import InputStyles from "./InputStyles";

const Input = ({
  name,
  label,
  value,
  onChange,
  disabled,
  error,
  isRequired,
  ...otherProps
}: any) => {
  const styles = InputStyles();
  return (
    <div>
      <label className={styles.fieldHeading}>
        {label} {isRequired === true && <span className={styles.red}>*</span>}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...otherProps}
        className={`${styles.input} ${disabled && styles?.editMode} ${
          error && styles.error
        }`}
        // style={inlineStyle}
        disabled={disabled}
      />
      {error && (
        <p className={styles.errorMsg}>{`${
          label ? label : "Field"
        } is required`}</p>
      )}
    </div>
  );
};

export default Input;
