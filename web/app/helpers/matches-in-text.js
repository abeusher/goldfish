import Ember from 'ember';

export default Ember.Helper.extend({
  compute: function (params) {
    var text = Ember.Handlebars.Utils.escapeExpression(params[0]);
    var term = Ember.Handlebars.Utils.escapeExpression(params[1]);

    var pos = text.toLowerCase().indexOf(term.toLowerCase());
    if (pos < 0) {
      return '';
    }
    var areaSize = 50;
    text = text.slice(Math.max(pos-areaSize, 0), Math.min(pos+areaSize, text.length));

    pos = text.toLowerCase().indexOf(term.toLowerCase());
    text = text.slice(0, pos) + '<mark>' + text.slice(pos, pos + term.length) + '</mark>' + text.slice(pos + term.length);
    text = text.replace(/\n/g, '<br>');
    return Ember.String.htmlSafe(text);
  }
});
