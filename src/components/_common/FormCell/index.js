import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import './styles.css';

function FormCell({ className, hasError, children }) {
  const compClass = classNames(className, {
    'form-cell': true,
    'form-cell--has-error': hasError
  });

  return (
    <div className={compClass}>
      {children}

      {hasError && (
        <div className="form-cell__error">
          <Icon type="error" /> The field is required.
        </div>
      )}
    </div>
  );
}

FormCell.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
  children: PropTypes.node
};

FormCell.defaultProps = {
  hasError: false
};

export default FormCell;
