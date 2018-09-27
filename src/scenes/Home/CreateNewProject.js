import React, { Component } from 'react';
import ModalWrap from '../../components/ModalWrapper';
import InputProjectName from '../../components/Inputs/InputProjectName';
import InputSlug from '../../components/Inputs/InputSlug';
import InputTargetSite from '../../components/Inputs/InputTargetSite';

import update from 'immutability-helper';
import * as actionCreators from '../../action';
import Slugify from '../../service/Slugify';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
let startRedirect = false;

//<InputProjectName/>
//  <InputSlug/>
class CreateNewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: '',
      title: '',
      sites: [],
      publish_to: {
        arn_au: false,
        cio_au: false,
        cio_nz: false,
        cmo_au: false,
        cw_au: false,
        cw_nz: false,
        cso_au: false,
        reseller_nz: false,
        tw: false,
        ggg: false,
      },
      redirect: false,
    };
  }
  handleSlugChange = event => {
    this.setState({ slug: Slugify(event.target.value) });
  };
  handleNameChange = event => {
    this.setState({ title: event.target.value });
  };
  handleTargetChecked = e => {
    const newState = update(this.state, {
      publish_to: {
        [e.target.id]: { $set: !this.state.publish_to[e.target.id] },
      },
    });
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
      console.log(this.state.publish_to[target.id], target.value);
    });
  };
  onTemplateListCreateProjectClose() {
    this.props.createProjectOpen({ open: false });
  }
  temp() {}
  loading() {
    return <div> loading</div>;
  }
  showLoading() {
    if (this.props.templateList.addProjectisFetching) {
      startRedirect = true;
      return this.loading();
    }
    if (!this.props.templateList.addProjectisFetching && startRedirect) {
    }
  }
  componentWillReceiveProps(nextProps) {
    if (startRedirect && nextProps.projectState.id) {
      startRedirect = false;
      this.props.createProjectOpen({ open: false });
      this.props.templateListPreviewClose({ open: false });
      this.props.history.push(`/edit/${nextProps.projectState.id}`);
    }
  }

  render() {
    const { templateList } = this.props;

    return templateList.addProjectisSuccess ? null : (
      <ModalWrap
        title="Create new project"
        confirmedText="Create"
        returnText="Cancel"
        onClose={() => this.onTemplateListCreateProjectClose()}
        onSave={() =>
          this.state.title !== '' && this.state.sites.length != 0
            ? this.props.fetchCreateProject(
                this.state.title,
                this.state.sites,
                8
              )
            : null
        }
      >
        {//TODO: loading sprite this.props.templateList.addProjectisFetching
        this.showLoading()}
        <div className="cf padd">
          <InputProjectName
            onChange={this.handleNameChange}
            value={this.state.title}
          />
          <InputSlug onChange={this.handleSlugChange} value={this.state.slug} />
          <InputTargetSite
            publishTo={this.state.publish_to}
            onChange={e => this.handleTargetChecked(e)}
            sites={this.state.sites}
          />
          {this.state.publish_to.arn_au}
        </div>
      </ModalWrap>
    );
  }
}
const mapStateToProps = store => ({
  templateList: store.templateList,
  projectState: store.projectState,
});
export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(CreateNewProject));
