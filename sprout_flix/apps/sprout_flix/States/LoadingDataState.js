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

      this.loadSoonUrls();
      this.loadDvdUrls();
      this.loadCurrentLocation();


      //after data is load move to trailer state
      this.gotoState('MainTrailerState');
    },

    loadCurrentLocation:function() {
      if(!navigator.geolocation) throw "Geolocation not supported";

      SproutFlix.gettingGeoLocation();

    },

    loadSoonUrls:function() {
      var key = 'wwmzjrbf86849kha4rtwg6an';
      var api = 'apikey=';
      var params = '&page_limit=10';
      var end = api + key + params;
      var soon = 'movies/upcoming.json?' + end;

      SC.Request.getUrl(soon)
          .notify(this, 'soonDidComplete')
          .json().send();

    }
    ,
    loadDvdUrls:function() {
      var key = 'wwmzjrbf86849kha4rtwg6an';
      var api = 'apikey=';
      var params = '&page_limit=10';
      var end = api + key + params;
      var dvd = 'dvds/new_releases.json?' + end;

      SC.Request.getUrl(dvd)
          .notify(this, 'dvdDidComplete')
          .json().send();

    }
    ,
    soonDidComplete:function(response) {
      var json = response.get('body');
      var content = json.movies;
      SproutFlix.comingSoonController.set('content', content);

      var ids = [];
      for (var i = 0; i < content.length; i++) {
        var id = content[i].id;
        ids.push(id);
      }

      //this.extractClips(ids);

    }
    ,
    dvdDidComplete:function(response) {
      var json = response.get('body');
      var content = json.movies;


      SproutFlix.newDvdController.set('content', content);


    }
    ,
    extractClips:function(ids) {
      //http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/clips.json?apikey=[your_api_key]
      var key = 'wwmzjrbf86849kha4rtwg6an';
      var api = 'apikey=';
      var params = '&page_limit=10';
      var end = api + key;


      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];

        var path = 'movies/' + id + '/clips.json?' + end

        SC.Request.getUrl(path)
            .notify(this, 'clipDidComplete')
            .json().send();
      }

    }
    ,
    clipDidComplete:function(response) {
      var json = response.get('body');
      debugger;

    }
    ,

    exitState:function() {
    }

  })
})
    ;