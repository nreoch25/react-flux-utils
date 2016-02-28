import React, { Component } from "react";
import { Link } from 'react-router';
import { Container } from "flux/utils";

import ContentActionCreators from "../../actions/ContentActionCreators";
import ContentStore from "../../stores/ContentStore";

class ContentList extends Component{

  initContent() {
    ContentActionCreators.fetchContent(this.section);
  }

  componentWillReceiveProps(nextProps) {
    this.section = nextProps.route.section.toLowerCase();
    this.initContent();
  }

  componentDidMount() {
    this.section = this.props.route.section.toLowerCase();
    this.initContent();
  }

  getStories() {
    if(this.state.content.length === 0) { return <div>Loading...</div>; }
    let curStories = [];
    let pathSection = this.section;
    this.state.content.map(function(story) {
      curStories.push(
        <Link key={story.id} to={`/${pathSection}/${story.sourceId}`}>{story.title}</Link>
      );
    });
    return curStories;

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

ContentList.getStores = () => ([ContentStore]);
ContentList.calculateState = (prevState) => ({
  content: ContentStore.getState()
});

export default Container.create(ContentList);
