import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../_common/Panel';
import Badge from '../../_common/Badge';
import Button from '../../_common/Button';
import Icon from '../../_common/Icon';
import './styles.css';

function Summary(props) {
  const { eduLevels } = props;
  const educationLevels = [];

  for (const level in eduLevels) {
    if (eduLevels.hasOwnProperty(level)) {
      educationLevels.push(<Badge key={level} text={level} />);
    }
  }

  return (
    <Panel className="summary">
      <header className="summary__header">
        <h1>
          <Icon className="header-icon margin-right--md" type="success" /> Job criteria
        </h1>

        <Button className="summary__edit-btn" secondary onClick={() => props.onEdit()}>
          Edit
        </Button>
      </header>

      <p>
        <span className="text-dimmed">A minimum No. years of experience:</span>{' '}
        {props.yearsExperience}
      </p>

      <p>
        <span className="text-dimmed">No. of working hours (per week):</span> {props.minHours}-
        {props.maxHours} hours
      </p>

      <p>
        <strong>Level of education</strong>
      </p>

      <div className="summary__education-wrapper">{educationLevels}</div>
    </Panel>
  );
}

Summary.propTypes = {
  eduLevels: PropTypes.object,
  yearsExperience: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onEdit: PropTypes.func.isRequired
};

export default Summary;
