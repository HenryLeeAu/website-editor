import React, { Component } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromText(this.props.children)
      ),
    };
    this.onChange = editorState => this.setState({ editorState });
  }

  render() {
    return (
      <span>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </span>
    );
  }
}

export default MyEditor;
