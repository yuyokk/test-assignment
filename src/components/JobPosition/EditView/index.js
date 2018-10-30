import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import set from 'lodash.set';
import Panel from '../../_common/Panel';
import Button from '../../_common/Button';
import FormCell from '../../_common/FormCell';
import Input from '../../_common/InputWithValidation';
import Icon from '../../_common/Icon';
import { objectHasTruthyValue } from './utils';
import './styles.css';

const REG_DIGITS_ONLY = /^\d+$/;
const REG_DIGITS_WITH_PLUS = /^(\d+)(\+?)$/;
const EDUCATION_LEVELS = [
  'Bachelor / Graduate',
  'GCSE / A-Level / Highschool / GED',
  'Master / Post-Graduate / PhD',
  'Vocational / Diploma / Associates degree'
];

class EditView extends React.Component {
  state = {
    formNeedsFixes: false,
    errors: {
      yearsExperience: false,
      eduLevels: false,
      minHours: false,
      maxHours: false
    }
  };

  handleChange = (key, value) => {
    this.props.onChange(key, value);

    this.resetErrorByKey(`errors.${key}`);
  };

  handleEduLevelnChange = (key, value) => {
    this.props.onChange(key, value);

    this.resetErrorByKey('errors.eduLevels');
  };

  resetErrorByKey = key => {
    if (get(this.state, key)) {
      const newState = { ...this.state };

      set(newState, key, false);
      this.setState(newState);
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.validateForm()) {
      this.props.onSave();
    } else {
      this.setState({ formNeedsFixes: true });
    }
  };

  validateForm = () => {
    let isValid = true;
    const { errors } = this.state;
    const newErrors = { ...errors };

    if (!this.props.yearsExperience) {
      isValid = false;
      newErrors.yearsExperience = true;
    }

    if (!this.props.minHours) {
      isValid = false;
      newErrors.minHours = true;
    }

    if (!this.props.maxHours) {
      isValid = false;
      newErrors.maxHours = true;
    }

    if (!objectHasTruthyValue(this.props.eduLevels)) {
      isValid = false;
      newErrors.eduLevels = true;
    }

    this.setState({ errors: newErrors });

    return isValid;
  };

  render() {
    const { errors, formNeedsFixes } = this.state;
    const { yearsExperience, minHours, maxHours, eduLevels } = this.props;

    return (
      <Panel className="edit-view">
        <header className="margin-bottom--lg">
          <div className="edit-view__header-inner-wrapper">
            <div className="margin-right margin-right--md">
              <Icon className="header-icon" type="digit" text="1" />
            </div>

            <div>
              <h1>Job criteria</h1>

              <div className="text-dimmed">
                We will use the data we collect here to better target your desired audience.
              </div>
            </div>
          </div>
        </header>

        <form className="edit-view__form" onSubmit={this.handleSubmit} noValidate>
          <div className="form__group">
            <FormCell hasError={errors.yearsExperience}>
              <label className="label" htmlFor="years-experience">
                <strong>A minimum No. years of experience</strong>
              </label>
              <Input
                className="form-control form-control--fixed-width"
                id="years-experience"
                placeholder="5+"
                type="text"
                required
                validationRegExp={REG_DIGITS_WITH_PLUS}
                value={yearsExperience}
                onChange={e => this.handleChange('yearsExperience', e.target.value)}
              />
            </FormCell>
          </div>

          <div className="form__subtitle">
            <strong>Level of education</strong>
          </div>

          <div className="form__group">
            <FormCell hasError={errors.eduLevels}>
              {EDUCATION_LEVELS.map((level, index) => {
                const id = `education-level-${index}`;
                const isChecked = (eduLevels && eduLevels[level]) || false;

                return (
                  <div className="form-check" key={level}>
                    <input
                      id={id}
                      className="form-checkbox"
                      type="checkbox"
                      checked={isChecked}
                      onChange={e => {
                        this.handleEduLevelnChange(`eduLevels.${level}`, e.target.checked);
                      }}
                    />
                    <label className="form-check__label" htmlFor={id}>
                      {level}
                    </label>
                  </div>
                );
              })}
            </FormCell>
          </div>

          <div className="form__subtitle">No. of working hours (per week)</div>

          <div className="form__group form__group--inline">
            <div className="margin-right">
              <FormCell hasError={errors.minHours}>
                <label className="label" htmlFor="min-working-hours">
                  Min
                </label>
                <Input
                  className="form-control form-control--fixed-width"
                  id="min-working-hours"
                  placeholder="32"
                  type="text"
                  required
                  validationRegExp={REG_DIGITS_ONLY}
                  value={minHours}
                  onChange={e => this.handleChange('minHours', e.target.value)}
                />
              </FormCell>
            </div>

            <div>
              <FormCell hasError={errors.maxHours}>
                <label className="label" htmlFor="max-working-hours">
                  Max
                </label>
                <Input
                  className="form-control form-control--fixed-width"
                  id="max-working-hours"
                  placeholder="40"
                  type="text"
                  required
                  validationRegExp={REG_DIGITS_ONLY}
                  value={maxHours}
                  onChange={e => this.handleChange('maxHours', e.target.value)}
                />
              </FormCell>
            </div>
          </div>

          <div className="text-right">
            <Button className="edit-view__btn-save" type="submit">
              {formNeedsFixes ? 'Save and continue' : 'Save'}
            </Button>
          </div>
        </form>
      </Panel>
    );
  }
}

EditView.propTypes = {
  eduLevels: PropTypes.object,
  yearsExperience: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

EditView.defaultProps = {
  availableEducationLevels: []
};

export default EditView;
