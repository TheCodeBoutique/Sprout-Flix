sc_require('views/TrailerContainer/trailer_queue_list');
SproutFlix.MainTrailerState = SC.State.extend({

  initialSubstate: 'loadingTrailers',

  loadingTrailers:SC.State.extend({

    enterState: function() {

    },
    doPlayTrailer:function(movie) {


    },
    doSlideBack:function(view) {
      SproutFlix.TrailerContainerController.set('isShowingBack', NO);

      var selectionView = view.getPath('parentView.parentView').get('trailerList');
      var detailView = view.getPath('parentView.parentView').get('trailerDetails');

      selectionView.animate('left', 0, {duration:.5, timing:'ease-in-out'});
      detailView.animate('left', -400, {duration:.5, timing:'ease-in-out'});
    },
    doEditList:function(view) {
      SproutFlix.TrailerContainerController.set('isShowingDelete', YES);
      SproutFlix.TrailerContainerController.set('isShowingSlide', NO);

    },
    doSlideScreen:function(view) {
      SproutFlix.TrailerContainerController.set('isShowingBack', YES);

      var detailView = view.getPath('parentView.parentView.parentView.parentView.parentView').get('trailerDetails');
      var currentView = view.getPath('parentView.parentView.parentView.parentView');

      detailView.animate('left', 0, {duration:.5, timing:'ease-in-out'});
      currentView.animate('left', 400, {duration:.5, timing:'ease-in-out'});
    },

    doShowTrailerList:function(view) {
      var pane = SproutFlix.TrailerQueueList.create({});
      pane.popup(view);

    },

    doChangeLayout:function(view) {

      var grid = SproutFlix.getPath('mainPage.mainPane.contentSplit.bottomRightView.grid');
      var horz = SproutFlix.getPath('mainPage.mainPane.contentSplit.bottomRightView.horizontal');

      if (grid.justAddedTrailers.layout.top === 285) {
        grid.justAddedTrailers.animate('top', 0, {duration:.5, timing:'ease-in-out'});
        horz.animate('opacity', 0, {duration:.3, timing:'ease-in-out'});
      } else {
        grid.justAddedTrailers.animate('top', 285, {duration:.5, timing:'ease-in-out'});
        horz.animate('opacity', 1, {duration:1.5, timing:'ease-in-out'});

      }


    },

    exitState:function() {

    }

  })
});