import React from 'react';
import set from 'lodash.set';
import EditView from './EditView';
import Summary from './Summary';

export default class JobPosition extends React.Component {
  state = {
    isEditMode: true,
    positionData: {
      yearsExperience: '',
      eduLevels: {},
      minHours: '32',
      maxHours: '40'
    }
  };

  handleChange = (key, value) => {
    const newState = { ...this.state };

    set(newState, `positionData.${key}`, value);
    this.setState(newState);
  };

  render() {
    const { positionData, isEditMode } = this.state;

    return (
      <React.Fragment>
        {isEditMode && (
          <EditView
            yearsExperience={positionData.yearsExperience}
            eduLevels={positionData.eduLevels}
            minHours={positionData.minHours}
            maxHours={positionData.maxHours}
            onChange={this.handleChange}
            onSave={() => this.setState({ isEditMode: false })}
          />
        )}

        {!isEditMode && (
          <Summary
            yearsExperience={positionData.yearsExperience}
            eduLevels={positionData.eduLevels}
            minHours={positionData.minHours}
            maxHours={positionData.maxHours}
            onEdit={() => this.setState({ isEditMode: true })}
          />
        )}
      </React.Fragment>
    );
  }
}
