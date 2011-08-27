SproutFlix.TrailerQueueCustomRow = SC.View.extend({
  classNames:'trailer-selection-list'.w(),
  childViews:'deleteButton posterImage titleLabel studioLabel iOSButton'.w(),

  mouseEntered:function() {
    this.$().addClass('trailer-selection-hover');

  },
  mouseDown:function(evt) {
    var selection = SC.SelectionSet.create();
    var current = this.get('content');
    var item = selection.contains(current);

    return item;

  },

  mouseExited:function() {
    this.$().removeClass('trailer-selection-hover');

  },

  posterImage:SC.ImageView.design({
    layout:{top:5,left:5,bottom:5,width:50},
    useImageQueue: NO,
    valueBinding:'.parentView.content.poster'
  }),

  titleLabel:SC.LabelView.design({
    layout:{left:60,width:200,height:30},
    valueBinding:'.parentView.content.title'

  }),

  studioLabel:SC.LabelView.design({
    layout:{bottom:5,left:60,width:200,height:30},
    valueBinding:'.parentView.content.studio'

  }),

  iOSButton:SC.ImageView.design({
    layout:{right:5,centerY:0,width:44,height:44},
    useImageQueue: NO,
    isVisibleBinding:'SproutFlix.TrailerContainerController.isShowingSlide',
    value: sc_static('/images/arrow-right.png'),
    mouseDown:function(evt) {
      var selection = SC.SelectionSet.create();
      var current = this.get('content');
      var item = selection.contains(current);

      SproutFlix.statechart.sendEvent('doSlideScreen', this);
      return item;
    }
  }),

  deleteButton:SC.ButtonView.design({
    layout:{right:5,centerY:0,width:60,height:40},
    title:'delete',
    isVisibleBinding:'SproutFlix.TrailerContainerController.isShowingDelete'

  })

});