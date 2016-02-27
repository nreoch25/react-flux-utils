import dispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';
import WebApi from '../utils/WebApi.js';

module.exports = {

  loadData: function(uri, action, section) {

    var data;
    var data_action;

    WebApi.getData(uri, function(response) {

      switch(action.actionType) {
        case Constants.LOAD_CATEGORY_LIST:
        data = response.body;
        this.getCategoryId(data, section);
        break;
        case Constants.LOAD_CATEGORY_CONTENT:
        data = response.body;
        data_action = { actionType: action.actionType, data: data };
        this.dispatchEvent(data_action);
        break;
        case Constants.LOAD_STORY_DATA:
        data = response.body;
        data_action = { actionType: action.actionType, data: data };
        this.dispatchEvent(data_action);
        break;
      }

    }.bind(this), function(error) {

      console.log(error);

    }.bind(this));

  },

  getCategoryContent : function(categoryId) {

    var action = { actionType: Constants.LOAD_CATEGORY_CONTENT };
    var uri = "https://api-gw-dev.radio-canada.ca/aggregate-content/v1/items?pageSize=20&page=1&categoryIds="+categoryId;
    this.loadData(uri, action);

  },

  getCategoryId : function(data, section) {

    var categoryList = data;
    var categoryId = -1;
    for( var i = 0; i < categoryList.length; i++ ) {
      if(section === categoryList[i].name) {
        categoryId = categoryList[i].id;
        break;
      }
    }
    if(categoryId > 0) {
      this.getCategoryContent(categoryId);
    } else {
      console.log('No category ID found');
    }


  },

  getStoryItem : function(id) {

    var action = { actionType: Constants.LOAD_STORY_DATA };
    var uri = "http://www.cbc.ca/json/cmlink/" + id;
    this.loadData(uri, action);

  },

  getContentItems : function(section) {
    var action = { actionType: Constants.LOAD_CATEGORY_LIST };
    var uri = "https://api-gw-dev.radio-canada.ca/aggregate-content/v1/categories";
    this.loadData(uri, action, section);

  },

  dispatchEvent: function(action) {

    console.log('dispatch event: ' + action.actionType);
    dispatcher.dispatch(action);

  }

}