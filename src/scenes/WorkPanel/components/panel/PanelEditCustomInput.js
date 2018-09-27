import React, { Component } from 'react';
import Input from '../../../../components/Input';
import Capitalize from '../../../../service/capitalize';
import PanelEditOptionButton from './PanelEditOptionButton';
class PanelEditCustom extends Component {
  constructor() {
    super();
    this.state = {
      option: false,
    };
  }
  handleDisplayOption = () => {
    this.setState({
      option: !this.state.option,
    });
  };

  render() {
    return (
      <div className="section">
        <h3>
          {Capitalize(this.props.title)
            .replace('_', ' ')
            .replace('-', ' ')}
        </h3>
        {this.props.data['text'] !== undefined ? (
          <div className="adjustColor lively-table adjustWrap ">
            <div className="adjustTitle">Text</div>
            <div className="adjustContent">
              <Input
                value={this.props.data['text']}
                onChange={e => this.props.handleContentChange(e, 'text')}
              />
            </div>
          </div>
        ) : null}
        {this.props.data['href'] !== undefined ? (
          <div>
            <div className="adjustColor lively-table adjustWrap ">
              <div className="adjustTitle">Url</div>
              <div className="adjustContent">
                <Input
                  value={
                    this.props.data['href'] === '#'
                      ? ''
                      : this.props.data['href']
                  }
                  placeholder={'ex:http://www.idg.com.au'}
                  onChange={e => this.props.handleContentChange(e, 'href')}
                />
              </div>
            </div>
            <div className="targetBlank alignRight ">
              <Input
                type="checkbox"
                name={this.props.title + '_target'}
                id={this.props.title + '_target'}
                checked={this.props.data['target'] === '_blank' ? true : false}
                onChange={e => this.props.handleContentChange(e, 'target')}
              />
              <label htmlFor={this.props.title + '_target'}>
                <span>
                  <span />
                </span>
                Open in new tab
              </label>
            </div>
          </div>
        ) : null}
        <div
          className={
            this.state.option ? 'optionContent show' : 'optionContent hidden'
          }
        >
          {this.props.data['class'] !== undefined ? (
            <div className="adjustColor lively-table adjustWrap ">
              <div className="adjustTitle">Class</div>
              <div className="adjustContent">
                <Input
                  value={this.props.data['class']}
                  placeholder={'class1,class2,...'}
                  onChange={e => this.props.handleContentChange(e, 'class')}
                />
              </div>
            </div>
          ) : null}
        </div>
        {this.props.data['class'] ? (
          <div className="alignRight">
            {' '}
            <PanelEditOptionButton
              className={this.state.option ? 'arrowUp' : 'arrowDown'}
              onClick={this.handleDisplayOption}
            >
              More
            </PanelEditOptionButton>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PanelEditCustom;
