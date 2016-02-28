import "whatwg-fetch";
import ContentActionCreators from "../actions/ContentActionCreators";

let ContentAPI = {

  fetchContent(section) {
    let curSection = section.toLowerCase();
    return fetch(`json/${curSection}.json`)
    .then((response) => response.json());
  }

};

export default ContentAPI;
