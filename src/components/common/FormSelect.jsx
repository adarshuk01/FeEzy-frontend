import React from "react";

const FormSelect = ({
  label,
  id,
  options = [],
  value,
  onChange,
  required = false,
  placeholder = "Select an option",
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="form-select w-full p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-content-light dark:text-content-dark focus:outline-none focus:ring bg-white focus:ring-primary focus:border-primary"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
