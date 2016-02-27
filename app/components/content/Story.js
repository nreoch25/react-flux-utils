import React from "react";
import ContentStore from '../../stores/ContentStore';
import ContentActions from '../../actions/ContentActions';

export default class Story extends React.Component{

  constructor() {
    super();
    this.onContentChange = this.onContentChange.bind(this);
    this.state = { content: { headline: '', summary: '' } };
  }

  componentDidMount() {
    ContentStore.addChangeListener(this.onContentChange);
    ContentActions.getStoryItem(this.props.params.id);
  }

  onContentChange() {
    ContentStore.removeChangeListener(this.onContentChange);
    let storyContent = ContentStore.all();
    console.log(storyContent);
    this.setState({
      content: {
        headline: storyContent.headline,
        summary: storyContent.summary
      }
    });
    
  }

  render() {
    return (
      <div>
      <h3>{this.state.content.headline}</h3>
      <p>{this.state.content.summary}</p>
      </div>
    );
  }
}