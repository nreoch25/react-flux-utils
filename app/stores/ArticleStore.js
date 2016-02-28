import AppDispatcher from "../dispatcher/AppDispatcher";
import Constants from "../constants/Constants";
import { ReduceStore } from "flux/utils";

class ArticleStore extends ReduceStore {

  getInitialState() {
    return []
  }

  reduce(state, action) {
    switch(action.type) {
      case Constants.FETCH_ARTICLE_SUCCESS:
        return action.payload.response;
      default:
        return state;
    }
  }

}

export default new ArticleStore(AppDispatcher);
