SproutFlix.DvdCustomRow = SC.View.extend({
  classNames:'trailer-selection-list'.w(),
  childViews:'poster title rating ratingUsers tomatoeNumber'.w(),

  mouseEntered:function() {
    this.$().addClass('trailer-selection-hover');

  },

  mouseExited:function() {
    this.$().removeClass('trailer-selection-hover');

  },

  poster:SC.ImageView.design({
    layout:{left:5,top:10,width:61,height:91},
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
    layout: {top:30,left:70, height: 20, width: 160 },
    escapeHTML: NO,
    isTextSelectable: YES,
    valueBinding:SC.binding('.parentView.content').transform(function(val) {
      var rating = val.ratings;
      return '<b>Critics Rating:</b> ' + rating.critics_score + '%';
    })
  }),

  tomatoeNumber:SC.ImageView.design({
    layout: {top:65,left:70, height: 24, width: 120 },
    useImageQueue: NO,
    valueBinding:SC.binding('.parentView.content').transform(function(val) {
      return SproutFlix.tomatoDisplay(val);
    })
  }),

  ratingUsers:SC.LabelView.design({
    classNames:'tomatoes-top-ten'.w(),
    layout: {top:45,left:70, height: 24, width: 160 },
    escapeHTML: NO,
    isTextSelectable: YES,
    valueBinding:SC.binding('.parentView.content').transform(function(val) {
      var rating = val.ratings;
      return '<b>Audience Rating:</b> ' + rating.audience_score + '%';
    })
  })

});
