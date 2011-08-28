SproutFlix.TomatoeCustomRow = SC.View.extend({
  classNames:'trailer-selection-list'.w(),
  childViews:'poster title rating ratingUsers'.w(),

  mouseEntered:function() {
    this.$().addClass('trailer-selection-hover');

  },

  mouseExited:function() {
    this.$().removeClass('trailer-selection-hover');

  },

  poster:SC.ImageView.design({
    layout:{left:5,centerY:0,width:61,height:91},
    useImageQueue: NO,
    valueBinding:SC.binding('.parentView.content').transform(function(val) {
      var thumb = val.posters;

      return thumb.thumbnail;
    })
  }),
  title:SC.LabelView.design({
    classNames:'tomatoes-top-ten'.w(),
    layout: {top:10,left:70, height: 24, width: 160 },
    escapeHTML: NO,
    isTextSelectable: YES,
    valueBinding:SC.binding('.parentView.content').transform(function(val) {
      var title = val.title;
      return title;
    })
  }),
  rating:SC.LabelView.design({
    classNames:'tomatoes-top-ten'.w(),
    layout: {bottom:10,left:70, height: 24, width: 160 },
    escapeHTML: NO,
    isTextSelectable: YES,
    valueBinding:SC.binding('.parentView.content').transform(function(val) {
      var rating = val.ratings;
      return '<b>Critics Rating:</b> ' + rating.critics_score +'%';
    })
  }),
  ratingUsers:SC.LabelView.design({
    classNames:'tomatoes-top-ten'.w(),
    layout: {bottom:40,left:70, height: 24, width: 160 },
    escapeHTML: NO,
    isTextSelectable: YES,
    valueBinding:SC.binding('.parentView.content').transform(function(val) {
      var rating = val.ratings;

      return '<b>Audience Rating:</b> ' + rating.audience_score +'%';
    })
  })
});