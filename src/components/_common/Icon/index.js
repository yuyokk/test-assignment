import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function Icon({ className, type, text }) {
  const compClassName = classNames(`icon icon--${type}`, className);

  return <span className={compClassName}>{text}</span>;
}

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'digit']).isRequired,
  text: PropTypes.string
};

export default Icon;
