import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function Panel({ className, children }) {
  const compClassName = classNames(className, 'panel');

  return <section className={compClassName}>{children}</section>;
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Panel;
