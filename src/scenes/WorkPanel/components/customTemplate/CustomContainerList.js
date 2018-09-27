import React, { Component } from 'react';
import CustomContainerItem from './CustomContainerItem';
import TouchArea from './TouchArea';
import * as actionCreators from '../../../../action';
import { connect } from 'react-redux';
class CustomerCountainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.containerState);
  }
  openPanel = () => {
    //   console.log(this.props.containerKey,this.props.containerState)
    console.log(
      this.props.containerKey,
      this.props.projectState.panel.customKey
    );
    if (this.props.containerKey !== this.props.projectState.panel.customKey) {
      if (this.props.projectState.panel.isSave) {
        this.props.projectStateShowAlert();
        setTimeout(() => {
          this.props.projectStateHiddenAlert();
        }, 2000);
      } else {
        this.props.projectStateOpenCustomPanel({
          customKey: this.props.containerKey,
        });
      }
    }
  };
  render() {
    //console.log(this.props.containerState)
    const listItems = this.props.containerState.map((item, index) => (
      <CustomContainerItem
        key={this.props.containerKey + index} /* key name = key + index*/
        itemTemplate={this.props.itemTemplate} /* pass item template*/
        itemState={this.props.containerState[index]} /*pass a item state */
      />
    ));

    return (
      <idg-container>
        {listItems}
        <TouchArea onClick={() => this.openPanel()} />
      </idg-container>
    );
  }
}

const mapStateToProps = store => ({
  projectState: store.projectState,
});
export default connect(
  mapStateToProps,
  actionCreators
)(CustomerCountainerList);
