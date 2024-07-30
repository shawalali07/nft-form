import React, { ChangeEvent, KeyboardEvent, WheelEvent } from "react";
import { ErrorMessage } from "../error/ErrorMessage";

export const Input = ({
  label,
  type = "text",
  id,
  placeholder,
  handleKeyPress,
  isDisabled,
  value,
  name,
  variant = "medium",
  checked,
  register = () => {},
  errorMsg = {},
}) => {
  const handleWheel = (e) => {
    const target = e.target;
    target.blur();
  };

  return (
    <div className="relative flex flex-col items-start w-full">
      {!!label && (
        <label
          className="block mb-2 text-sm font-medium text-white dark:text-white"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          onWheel={handleWheel}
          id={id}
          className={`w-full ${"py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700 "} input-${variant} border-darkPrimary ${
            errorMsg ? "border-inputError" : ""
          } focus:border-darkPrimary focus:ring-0`}
          type={type}
          placeholder={placeholder}
          value={value || undefined}
          onKeyDown={handleKeyPress}
          {...register(name)}
          disabled={isDisabled}
          name={name || ""}
          checked={checked}
        />
      </div>
      <div className="relative w-full flex justify-between items-center gap-2">
        {errorMsg[name]?.message && (
          <ErrorMessage msg={errorMsg[name]?.message} />
        )}
      </div>
    </div>
  );
};
