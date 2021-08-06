import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({
  title,
  placeholder,
  description,
  inputType = "text",
  icon,
  onChangeHandler,
  name,
  isRequired = false,
}) => {
  return (
    <div className="border border-secondary bg-secondary-shade bg-opacity-10 rounded-lg p-4">
      <div className="flex justify-start items-center gap-2">
        <i className={`${icon} text-secondary-shade`}></i>
        <div className="text-secondary-shade uppercase">{title}</div>
      </div>
      <input
        name={name}
        onChange={(e) =>
          onChangeHandler({ key: e.target.name, value: e.target.value })
        }
        type={inputType}
        min={0}
        className="text-xl text-dark font-bold capitalize appearance-none focus:outline-none bg-transparent w-full"
        placeholder={placeholder}
        required={isRequired}
      />
      <div className="text-dark font-light">{description}</div>
    </div>
  );
};
SearchInput.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  inputType: PropTypes.string,
  icon: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};
export default SearchInput;
