import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function InputWithValidation(props) {
  function handleChange(event) {
    const { onChange } = props;
    const value = event.target.value;

    if (!value || !props.validationRegExp) {
      return onChange && onChange(event);
    }

    const isValid = props.validationRegExp.test(value);

    if (isValid) {
      return onChange && onChange(event);
    }
  }

  const className = classNames(props.className, 'form-control');

  return (
    <input
      className={className}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      onChange={handleChange}
    />
  );
}

InputWithValidation.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  validationRegExp: PropTypes.instanceOf(RegExp),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
};

export default InputWithValidation;
