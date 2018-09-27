import React, { Component } from 'react';
import InputSearch from '../../components/Inputs/InputSearch';
import HeaderSection from '../components/HeaderSection';
import * as actionCreators from '../../action';
import { connect } from 'react-redux';

class TemplateListItem extends Component {
  onTemplateListPreviewOpen(event, index) {
    event.preventDefault();
    console.log(index);
    this.props.templateListPreviewOpen({ open: true, index: index });
  }
  render() {
    const { templateList } = this.props;
    return (
      <li className="templateListItem ListItem paddL col-3 lively-left">
        <a
          href=""
          onClick={event =>
            this.onTemplateListPreviewOpen(event, this.props.index)
          }
        >
          <div
            className="cf "
            style={
              this.props.item.thumbnail
                ? { backgroundImage: 'url(' + this.props.item.thumbnail + ')' }
                : null
            }
          >
            <span className="hideBtn">
              <span>Preview</span>
            </span>
          </div>
        </a>
        <span className="templateName  lively-block padd">
          {this.props.item.title}
        </span>
      </li>
    );
  }
}

const mapStateToProps = store => ({
  templateList: store.templateList,
});
export default connect(
  mapStateToProps,
  actionCreators
)(TemplateListItem);
