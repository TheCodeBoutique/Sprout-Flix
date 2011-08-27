sc_require('views/JustAdded/just_added_player_pane');
SproutFlix.JustAddedCustomCell = SC.View.extend({

  childViews:['backgroundView','trailerPoster','addTrailer','playTrailer'],

  backgroundView:SC.View.design({
    classNames:'trail'.w(),
    layout:{top:10,bottom:10,right:10,left:10}
  }),
  trailerPoster:SC.ImageView.design({
    layout:{top:30,bottom:50,right:20,left:20},
    useCanvas:YES,
    useImageQueue: NO,
    valueBinding:'.parentView.content.poster'
  }),

  addTrailer:SC.ButtonView.design({
    layout: { bottom: 20, height: 24, right: 25, width: 70 },
    themeName:'dark',
    title:  "Add",
    action:'add',
    add:function() {
      var trailerObject = this.getPath('parentView.content');
      var content = this.getPath('parentView.content');
      SproutFlix.addTrailer(trailerObject);
      SproutFlix.moveToQueAnimation(this, content);

    }
  }),

  playTrailer:SC.ButtonView.design({
    layout: { bottom: 20, height: 24, left: 20, width: 70 },
    themeName:'dark',
    title:  "Play",
    action:'click',
    mouseDown: function(evt) {
      var data = this.getPath('parentView.content');
      SproutFlix.startFade();
      SproutFlix.justAddedTrailersSelectionController.set('content', data);
      var pane = SproutFlix.JustAddedPlayerPane.create({}).append();
      SproutFlix.videoPlayerController.set('content', SproutFlix.parseTrailerURL());
      SproutFlix.statechart.sendEvent('doPlayTrailer', data);
      return YES;
    }
  })
});