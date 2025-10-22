import React from "react";

const FormInput = ({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input w-full p-3 rounded-lg bg-white border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-content-light dark:text-content-dark placeholder-subtle-light dark:placeholder-subtle-dark focus:outline-none focus:ring focus:ring-primary focus:border-primary"
      />
    </div>
  );
};

export default FormInput;
