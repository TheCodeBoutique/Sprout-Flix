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
    doShowTopTen:function(view) {
      var ten = SproutFlix.getPath('mainPage.mainPane.contentSplit.topLeftView.topTenMovies.topTen.ten');
      var dvd = SproutFlix.getPath('mainPage.mainPane.contentSplit.topLeftView.topTenMovies.topTen.topDVD');
      var soon = SproutFlix.getPath('mainPage.mainPane.contentSplit.topLeftView.topTenMovies.topTen.commingSoon');
      var selection = view.title;

      if (selection === 'DVD') {
        if (ten.layout.left === 0) {
          ten.animate('left', 250, {duration:.5, timing:'ease-in-out'});
        } else if (soon.layout.left === 0) {
          soon.animate('left', 250, {duration:.5, timing:'ease-in-out'});
        }
        dvd.animate('left', 0, {duration:.5, timing:'ease-in-out'});


        this.invokeLater(function() {
          soon.adjust('left', -250);
          ten.adjust('left', -250);
        }, 600)
      } else if (selection === 'Soon') {

        if (ten.layout.left === 0) {
          ten.animate('left', 250, {duration:.5, timing:'ease-in-out'});
        } else if (dvd.layout.left === 0) {
          dvd.animate('left', 250, {duration:.5, timing:'ease-in-out'});
        }

        soon.animate('left', 0, {duration:.5, timing:'ease-in-out'});

        this.invokeLater(function() {
          dvd.adjust('left', -250);
          ten.adjust('left', -250);
        }, 600)
      } else if (selection === 'Top') {

        if (soon.layout.left === 0) {
          soon.animate('left', 250, {duration:.5, timing:'ease-in-out'});
        } else if (dvd.layout.left === 0) {
          dvd.animate('left', 250, {duration:.5, timing:'ease-in-out'});
        }

        ten.animate('left', 0, {duration:.5, timing:'ease-in-out'});

        this.invokeLater(function() {
          dvd.adjust('left', -250);
          soon.adjust('left', -250);
        }, 600)
      }


    },


    exitState:function() {

    }

  })
});