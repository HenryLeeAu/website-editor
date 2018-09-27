import React, { Component } from 'react';
import ModalWrap from '../../../components/ModalWrapper';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import InputProjectName from '../../../components/Inputs/InputProjectName';
import InputSlug from '../../../components/Inputs/InputSlug';
import InputTargetSite from '../../../components/Inputs/InputTargetSite';
import EditFeaturedImage from './EditFeaturedImage';
import { connect } from 'react-redux';
import * as actionCreators from '../../../action';
import update from 'immutability-helper';
import Slugify from '../../../service/Slugify';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.settings.title,
      slug: this.props.settings.slug,
      summary: '',
      description: this.props.settings.description,
      sites: this.props.settings.sites,
      start_dt: this.props.settings.start_dt,
      end_dt: this.props.settings.end_dt,
      logo: this.props.settings.logo,
      is_published: this.props.settings.is_published,
      publish_to: {
        arn_au: this.props.settings.publish_to.arn_au,
        cio_au: this.props.settings.publish_to.cio_au,
        cio_nz: this.props.settings.publish_to.cio_nz,
        cmo_au: this.props.settings.publish_to.cmo_au,
        cw_au: this.props.settings.publish_to.cw_au,
        cw_nz: this.props.settings.publish_to.cw_nz,
        cso_au: this.props.settings.publish_to.cso_au,
        reseller_nz: this.props.settings.publish_to.reseller_nz,
        tw: this.props.settings.publish_to.tw,
        ggg: this.props.settings.publish_to.ggg,
      },
    };
  }

  handleInputChange(event, key) {
    if (key === 'slug') {
      this.setState(
        update(this.state, {
          [key]: { $set: Slugify(event.target.value) },
        })
      );
    } else {
      this.setState(
        update(this.state, {
          [key]: { $set: event.target.value },
        })
      );
    }
  }
  handleTimeChange(key, time) {
    //time format  "2017-08-15T12:47:00"
    let monthFormat = month => {
      return month < 9 ? '0' + (month + 1) : month + 1;
    };
    let numberFormat = num => {
      return num < 10 ? '0' + num : num;
    };
    let newTime =
      time.year() +
      '-' +
      monthFormat(time.month()) +
      '-' +
      numberFormat(time.date()) +
      'T' +
      numberFormat(time.hours()) +
      ':' +
      numberFormat(time.minutes()) +
      ':00';

    this.setState(
      update(this.state, {
        [key]: { $set: newTime },
      })
    );
  }
  handleTargetChecked = e => {
    const newState = update(this.state, {
      publish_to: {
        [e.target.id]: { $set: !this.state.publish_to[e.target.id] },
      },
    });
    //this.setState(newState,()=> console.log(this.state.publish_to))
    let target = e.target;
    this.setState(newState, () => {
      if (this.state.publish_to[target.id]) {
        let sites = this.state.sites.slice();
        sites.push(parseInt(target.value, 10));
        this.setState({ sites: sites });
      } else {
        let sites = this.state.sites.slice();
        for (let i = 0; i < sites.length; i++) {
          if (parseInt(sites[i], 10) === parseInt(target.value, 10)) {
            sites.splice(i, 1);
            this.setState({ sites: sites });
          }
        }
      }
    });
  };
  handleSettingsClose = () => {
    this.props.settingsClose(false);
  };
  handleSettingsSave = () => {
    //&& this.state.title.indexOf(' ') < 0
    const pushState = {
      title: this.state.title,
      slug: this.state.slug,
      summary: '',
      description: this.state.description,
      sites: this.state.sites,
      start_dt: this.state.start_dt,
      end_dt: this.state.end_dt,
      is_published: this.state.is_published,
      publish_to: this.state.publish_to,
    };
    if (this.state.title !== '' && this.state.sites.length !== 0) {
      this.props.updateProject(
        this.props.projectState.id,
        pushState,
        'settings',
        this.state.logo
      );
      this.props.settingsClose(false);
    }
  };
  handleDate = time => {
    let d = new Date(time);
    return (
      d.getDate() +
      '/' +
      d.getMonth() +
      '/' +
      d.getFullYear() +
      ' ' +
      d.getHours() +
      ':' +
      d.getMinutes()
    );
  };
  handlePause = () => {
    this.setState(
      update(this.state, {
        is_published: { $set: !this.state.is_published },
      })
    );
  };
  componentWillReceiveProps(nextProps) {
    //update the new sotre settings into state
    const { settings } = nextProps;
    this.setState({
      title: settings.title,
      slug: settings.slug,
      summary: '',
      description: settings.description,
      sites: settings.sites,
      start_dt: settings.start_dt,
      end_dt: settings.end_dt,
      logo: settings.logo,
      is_published: settings.is_published,
      publish_to: {
        arn_au: settings.publish_to.arn_au,
        cio_au: settings.publish_to.cio_au,
        cio_nz: settings.publish_to.cio_nz,
        cmo_au: settings.publish_to.cmo_au,
        cw_au: settings.publish_to.cw_au,
        cw_nz: settings.publish_to.cw_nz,
        cso_au: settings.publish_to.cso_au,
        reseller_nz: settings.publish_to.reseller_nz,
        tw: settings.publish_to.tw,
        ggg: settings.publish_to.ggg,
      },
    });
  }
  dateFormat(date) {
    if (!date) {
      let d = moment().set({ minute: 0, hour: 0 });
      return d.format();
    } else {
      let d = new Date(date);
      return d;
    }
  }
  handleFilePreview = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      var target = e.target;
      reader.onloadend = () => {
        this.setState({ logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  render() {
    return (
      <ModalWrap
        large
        title="Settings"
        confirmedText="Update"
        returnText="Cancel"
        onClose={this.handleSettingsClose}
        onSave={this.handleSettingsSave}
      >
        <div className="col-2 padd">
          <EditFeaturedImage
            onChange={event => this.handleFilePreview(event)}
            logo={this.state.logo}
          />
        </div>
        <div className="col-10">
          <InputProjectName
            onChange={event => this.handleInputChange(event, 'title')}
            value={this.state.title}
          />
          <InputSlug
            onChange={event => this.handleInputChange(event, 'slug')}
            value={this.state.slug}
          />
          <div className="cf padd">
            <div className="col-3 padd alignRight">
              <label htmlFor="page-summary">Page summary</label>
            </div>
            <div className="col-9">
              <Input
                type="text"
                className="page-summary"
                id="page-summary"
                onChange={event => this.handleInputChange(event, 'summary')}
                value={this.state.summary}
              />
            </div>
          </div>
          <div className="cf padd">
            <div className="col-3 padd alignRight">
              <label htmlFor="page-summary">Description</label>
            </div>
            <div className="col-9">
              <textarea
                className="page-summary"
                id="page-summary"
                onChange={event => this.handleInputChange(event, 'description')}
                value={this.state.description}
              />
            </div>
          </div>
          <div className="cf padd">
            <div className="col-3 padd alignRight">
              <label htmlFor="page-summary">Period</label>
            </div>
            <div className="col-3">
              <div />
              <Datetime
                timeFormat={'HH:mm'}
                defaultValue={this.dateFormat(this.state.start_dt)}
                onChange={time => this.handleTimeChange('start_dt', time)}
              />
              <Input
                className={
                  this.state.is_published
                    ? 'dateDisplay'
                    : 'dateDisplay offline'
                }
                value={moment(this.dateFormat(this.state.start_dt)).format(
                  'MM/DD/YYYY HH:mm'
                )}
                readOnly
              />
            </div>
            <div className="col-1 alignCenter">~</div>
            <div className="col-3">
              <div />
              <Datetime
                timeFormat={'HH:mm'}
                defaultValue={this.dateFormat(this.state.end_dt)}
                onChange={time => this.handleTimeChange('end_dt', time)}
              />
              <Input
                className={
                  this.state.is_published
                    ? 'dateDisplay'
                    : 'dateDisplay offline'
                }
                value={moment(this.dateFormat(this.state.end_dt)).format(
                  'MM/DD/YYYY HH:mm'
                )}
                readOnly
              />
            </div>
            <div className="col-2">
              {this.state.is_published ? (
                <Button Warning Outline onClick={this.handlePause}>
                  Offline
                </Button>
              ) : (
                <Button Primary Outline onClick={this.handlePause}>
                  Online{' '}
                </Button>
              )}
            </div>
          </div>
          <div className="cf padd">
            <InputTargetSite
              publishTo={this.state.publish_to}
              sites={this.state.sites}
              onChange={e => this.handleTargetChecked(e)}
            />
          </div>
        </div>
      </ModalWrap>
    );
  }
}

const mapStateToProps = store => ({
  settings: store.settings,
  projectState: store.projectState,
});
export default connect(
  mapStateToProps,
  actionCreators
)(Settings);
