import React, { Component } from "react";
import ContentActionCreators from "../../actions/ContentActionCreators";
import ArticleStore from "../../stores/ArticleStore";
import { Container } from "flux/utils";

class Story extends Component {

  componentDidMount() {
    ContentActionCreators.fetchArticle(this.props.params.id);
  }

  render() {
    return (
      <div>
      <h3>{this.state.article.headline}</h3>
      <p>{this.state.article.summary}</p>
      </div>
    );
  }
}

Story.getStores = () => ([ArticleStore]);
Story.calculateState = (prevState) => ({
  article: ArticleStore.getState()
});

export default Container.create(Story);
