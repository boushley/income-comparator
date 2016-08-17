import {Component} from 'react';
import { connect } from 'react-redux';
import IncomeSettings from './income-settings';
import { TOGGLE_SETTINGS } from '../reducers/view-state';

class SettingsMenu extends Component {
  render() {
    var root = [this.renderSettingsButton()];

    if (this.props.isOpen) {
      root.push(this.renderSettingsPanel());
    }

    return <div className='settings'>{root}</div>;
  }

  renderSettingsPanel() {
    return [
      <h2 key="settings-header">Settings Panel</h2>,
      <IncomeSettings key="income-settings" />
    ];
  }
  renderSettingsButton() {
    let actionText = this.props.isOpen ? 'Close' : 'Open';
    return <button onClick={this.props.toggleSettings} key="settings-button">{actionText} Settings</button>;
  }
}

function stateSelect(store) {
  return {
    isOpen: store.viewState.settingsOpen
  };
}

function actionCreator(dispatch) {
  return {
    toggleSettings: function() {
      dispatch({
        type: TOGGLE_SETTINGS
      });
    }
  };
}

export default connect(stateSelect, actionCreator)(SettingsMenu);
