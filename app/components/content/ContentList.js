import React from "react";
import { Link } from 'react-router';

import ContentActions from '../../actions/ContentActions';
import ContentStore from '../../stores/ContentStore';

export default class ContentList extends React.Component{

  constructor() {
    super();
    this.onContentChange = this.onContentChange.bind(this);
  }

  initContent(section) {
    ContentStore.addChangeListener(this.onContentChange);
    ContentActions.getContentItems(section);
  }

  componentWillReceiveProps(nextProps) {
    this.section = nextProps.route.section;
    this.initContent(this.section);
  }

  componentDidMount() {
    this.section = this.props.route.section;
    this.initContent(this.section);
  }

  onContentChange() {
    ContentStore.removeChangeListener(this.onContentChange);
    this.stories = ContentStore.all();
    this.forceUpdate();
  }

  getStories() {
    if(typeof this.stories === "undefined") {
      return;
    } else {
      let curStories = [];
      let pathSection = this.section.toLowerCase();
      this.stories.map(function(story) {
        curStories.push(
          <Link key={story.id} to={`/${pathSection}/${story.sourceId}`}>{story.title}</Link>
        );
      });
      return curStories;
    }
  }

  render() {
    return (
      <div>
      <h3>Content List</h3>
      { this.getStories() }
      </div>
      );
  }
}