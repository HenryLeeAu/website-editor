import React, { Component } from 'react';
import WorkPanelHeader from './WorkPanelHeader';
import WorkPanelWorkArea from './WorkPanelWorkArea';
import WorkPanelRHS from './WorkPanelRHS';
import Settings from './components/Settings';
import * as actionCreators from '../../action';
import { connect } from 'react-redux';
import './index.css';
import update from 'immutability-helper';
class WorkPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {},
      insertMedia: true,
      scripts: [],
      css: [],
      settingIsOpen: false,
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
    const { match } = this.props;
    // console.log(match.params['projectId'])
    //  console.log('props',this.props)
    this.props.fetchProjectState('pages', match.params['projectId']);

    //TODO: it will store data into different reducer
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    const jsArr = [
      'https://code.jquery.com/jquery-3.2.1.min.js',
      'https://use.typekit.net/foobar2.js',
    ];
    const cssArr = [
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
    ];
    this.state.scripts.map((item, index) => {
      document.body.removeChild(this.state.scripts[index]);
    });
    cssArr.map((item, index) => {
      document
        .getElementsByTagName('head')[0]
        .removeChild(this.state.css[index]);
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(this.props.settings.isOpen);
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      this.props.projectState.panel.customKey,
      this.props.projectState.saveState,
      nextProps.projectState.saveState,
      this.props.settings.isOpen,
      nextProps.settings.isOpen
    );
    if (
      !this.props.projectState.panel.customKey &&
      this.props.projectState.saveState === 'saving' &&
      nextProps.projectState.saveState === 'finish' &&
      !this.props.settings.isOpen
    ) {
      console.log('Save finished from self');
      //console.log(this.props.projectState.saveState, nextProps.projectState.saveState)
    }

    if (this.props.settings !== nextProps.settings) {
      this.setState(
        update(this.state, {
          settings: { $set: nextProps.settings },
        })
      );
    }

    //TODO: need to load real template media
    if (
      this.props.projectState.state.present.media_files &&
      this.state.insertMedia
    ) {
      if (
        this.props.projectState.state.present.media_files['js'].length === 0 &&
        this.props.projectState.state.present.media_files['css'].length === 0
      ) {
        this.loadCSS();
        this.loadJS();
        this.setState(
          update(this.state, {
            insertMedia: { $set: false },
          })
        );
      }
    }
  }
  loadCustomJs = index => {
    const jsArr = [
      'http://demo.idg.com.au.s3.amazonaws.com/test/jquery-3.2.1.js',
      'http://demo.idg.com.au.s3.amazonaws.com/test/x2.js',
    ];
    console.log(this.props.projectState.state.present.custom_media.js);
    this.state.scripts[index] = document.createElement('script');
    this.state.scripts[index].async = true;
    this.state.scripts[
      index
    ].innerHTML = this.props.projectState.state.present.custom_media.js;
    document.body.appendChild(this.state.scripts[index]);
  };
  loadJS = () => {
    //TODO: need to load real template media
    const jsArr = [
      'http://demo.idg.com.au.s3.amazonaws.com/test/jquery-3.2.1.js',
      'http://demo.idg.com.au.s3.amazonaws.com/test/x2.js',
    ];

    const scriptLoad = count => {
      this.state.scripts[count] = document.createElement('script');
      this.state.scripts[count].src = jsArr[count];
      this.state.scripts[count].async = true;
      this.state.scripts[count].onload = () => {
        console.log('jQuery loaded.' + count);
        count++;
        if (count < jsArr.length) {
          scriptLoad(count);
        } else {
          console.log('finish load');
          this.loadCustomJs(count);
        }
      };
      document.body.appendChild(this.state.scripts[count]);
    };
    scriptLoad(0);
  };

  loadCSS = () => {
    //TODO: need to load real template media
    const cssArr = [
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
    ];

    const cssLoad = () => {
      cssArr.map((item, index) => {
        console.log(item);
        this.state.css[index] = document.createElement('link');
        this.state.css[index].href = item;
        this.state.css[index].type = 'text/css';
        this.state.css[index].rel = 'stylesheet';
        this.state.css[index].media = 'screen,print';

        document
          .getElementsByTagName('head')[0]
          .appendChild(this.state.css[index]);
      });
    };
    cssLoad();
  };
  render() {
    const { settings } = this.props;
    return (
      <div>
        <WorkPanelHeader />
        <div>
          <WorkPanelWorkArea />
          <WorkPanelRHS />
        </div>
        {this.props.settings.isOpen ? (
          <Settings settings={this.state.settings} />
        ) : null}
      </div>
    );
  }
}

// we conntent settings from reducer
const mapStateToProps = store => ({
  settings: store.settings,
  projectState: store.projectState,
});
export default connect(
  mapStateToProps,
  actionCreators
)(WorkPanel);
