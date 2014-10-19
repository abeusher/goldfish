import Page from 'page';
import Folder from 'folder';
import FolderListView from 'folder_list_view';
import PageView from 'page_view';


var App = Backbone.Router.extend({
  initialize: function () {
    this.bind('all', this.updateHighlights);
  },

  routes: {
    "":              "folder",
    "*folder/":      "folder",
    "*folder/:page": "page",
    ":page":         "page",
  },

  updateHighlights: function (route) {
    $('a[href="' + window.location.pathname + '"]').addClass("active");
    $('a[href!="' + window.location.pathname + '"]').removeClass("active");
  },

  folder: function (folder) {
    window.appView.setFolder(folder || '/');
  },

  page: function (folder, page) {
    if (!page) {
      // Root page
      page = '/' + folder;
      folder = '/';
    } else {
      page = folder + '/' + page;
    }
    window.appView.setFolder(folder);
    window.appView.setPage(page);
  },
});


var AppView = Backbone.View.extend({
  folder: new Folder(),
  page: new Page(),

  initialize: function () {
    this.folderListView = new FolderListView({model: this.folder});
    $('#list').append(this.folderListView.el);
    this.pageView = new PageView({model: this.page});
    $('#page').append(this.pageView.el);
  },

  setFolder: function (path) {
    this.folder.id = path;
    this.folder.fetch();
  },

  setPage: function (path) {
    this.page.id = path;
    this.page.fetch();
  },
});


// From https://gist.github.com/tbranyen/1142129
$(document).delegate("a", "click", function(e) {
  var href = this.getAttribute("href");
  var protocol = this.protocol + "//";
  if (href.slice(protocol.length) !== protocol) {
    e.preventDefault();
    window.app.navigate(href, {trigger: true});
  }
});


$(function () {
  window.app = new App();
  window.appView = new AppView();
  Backbone.history.start({pushState: true});
});
