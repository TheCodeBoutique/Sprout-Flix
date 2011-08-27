sc_require('views/main_page');
SproutFlix.LoadingDataState = SC.State.extend({

  initialSubstate: 'fetchingData',

  fetchingData:SC.State.extend({

    enterState: function() {
      console.log('fetching data....');
      SproutFlix.getPath('mainPage.mainPane').append();
      /**
       * create a local query from are store and add the results
       * to the right controllers....
       */
      var justAddedData = SproutFlix.store.find(SproutFlix.JustAddedQuery);
      SproutFlix.justAddedController.set('content', justAddedData);

      var mostPopularData = SproutFlix.store.find(SproutFlix.MostPopularQuery);
      SproutFlix.mostPopularController.set('content', mostPopularData);

      var tomatoesData = SproutFlix.store.find(SproutFlix.RottenTomatoesQuery);
      SproutFlix.tomatoesController.set('content', tomatoesData);

      //after data is load move to trailer state
      this.gotoState('MainTrailerState');
    },

    exitState:function() {
    }

  })
});