import AppDispatcher from "../dispatcher/AppDispatcher";
import Constants from "../constants/Constants.js";
import ContentAPI from "../utils/ContentAPI.js";

let ContentActionCreators = {

  fetchContent(section) {
    AppDispatcher.dispatchAsync(ContentAPI.fetchContent(section), {
      request: Constants.FETCH_CONTENT,
      success: Constants.FETCH_CONTENT_SUCCESS,
      failure: Constants.FETCH_CONTENT_ERROR
    });
  },

  fetchArticle(id) {
    AppDispatcher.dispatchAsync(ContentAPI.fetchArticle(id), {
      request: Constants.FETCH_ARTICLE,
      success: Constants.FETCH_ARTICLE_SUCCESS,
      failure: Constants.FETCH_ARTICLE_ERROR
    });
  }

};

export default ContentActionCreators;
