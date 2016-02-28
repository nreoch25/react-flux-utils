import "whatwg-fetch";
import ContentActionCreators from "../actions/ContentActionCreators";

let ContentAPI = {

  fetchContent(section) {
    let curSection = section.toLowerCase();
    return fetch(`http://localhost:3000/json/${curSection}.json`)
    .then((response) => response.json());
  },

  fetchArticle(id) {
    return fetch("http://localhost:3000/json/story1.json")
    .then((response) => response.json());
  }

};

export default ContentAPI;
