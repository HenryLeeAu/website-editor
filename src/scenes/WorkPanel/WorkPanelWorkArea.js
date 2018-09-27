import React, { Component } from 'react';
import IconSwitchMobile from '../../media/icon-mobile.png';
import IconSwitchDesktop from '../../media/icon-desktop.png';
import CustomTemplate from './components/customTemplate';
import ReactDOMServer from 'react-dom/server';
//Feature
//control customer's template size
class WorkPanelWorkArea extends Component {
  constructor() {
    super();
    this.state = {
      mobileMode: false,
      workPanelSize: {
        width: '',
      },
      workPanelHeight: {
        height: '',
      },
    };
  }
  updatePanelSize = () => {
    this.setState({
      workPanelSize: {
        width: window.innerWidth - 345 + 'px',
      },
    });
    if (this.state.mobileMode === false) {
      this.setState({
        workPanelHeight: {
          width: '100%',
          height: window.innerHeight - 70 + 'px',
        },
      });
    }
  };
  updateMobilePreviewModeBox() {
    if (this.state.mobileMode === false) {
      this.setState({
        workPanelHeight: {
          width: '100%',
          height: window.innerHeight - 70 + 'px',
        },
      });
    } else {
      this.setState({
        workPanelHeight: {
          width: '320px',
          height: window.innerHeight - 70 + 'px',
        },
      });
    }
  }
  switchDispayMode() {
    this.setState({ mobileMode: !this.state.mobileMode }, this.updatePanelSize);
  }
  componentWillMount() {
    this.updatePanelSize();
    window.addEventListener('resize', this.updatePanelSize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePanelSize, false);
  }
  render() {
    return (
      <div className="workPanelWorkArea" style={this.state.workPanelSize}>
        <div
          className="mobilePreviewModeBox"
          style={
            this.state.mobileMode
              ? { height: '480px', width: '320px', marginTop: '100px' }
              : { height: window.innerHeight - 70 + 'px' }
          }
        >
          <CustomTemplate />
        </div>
        <button
          className="mobilePreviewModeButton"
          onClick={this.switchDispayMode.bind(this)}
        >
          <img
            src={this.state.mobileMode ? IconSwitchDesktop : IconSwitchMobile}
            alt="Switch display mode"
          />
        </button>
      </div>
    );
  }
}
export default WorkPanelWorkArea;
