import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function Button(props) {
  const className = classNames(props.className, {
    btn: true,
    'btn-primary': props.primary,
    'btn-secondary': props.secondary
  });

  return (
    <button className={className} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

Button.propType = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
};

Button.defaultProps = {
  primary: true,
  secondary: false
};

export default Button;
