import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Badge({ text }) {
  return <span className="badge">{text}</span>;
}

Badge.propTypes = {
  text: PropTypes.string
};

export default Badge;
