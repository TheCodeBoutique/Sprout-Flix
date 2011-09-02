SC.mixin(SproutFlix, {

  parseTrailerURL:function() {
    var tmpLoc, tmpTitle,
        title, location,
        prefix,fullURL,poster,movieURL;

    tmpLoc = SproutFlix.justAddedTrailersSelectionController.get('location');
    tmpTitle = SproutFlix.justAddedTrailersSelectionController.get('title');
    poster = SproutFlix.justAddedTrailersSelectionController.get('poster');
    title = tmpTitle.toLowerCase().split(' ').join('').replace('ii', 2).replace('part2', 2);
    location = tmpLoc.replace("/trailers", "");
    movieURL = location + title;
    //prefix = "<video id='' class= 'video' type= 'video/mp4' src=http://trailers.apple.com/movies"
    prefix = "<video " + "id=sproutPlayer" + " poster=" + poster + " controls='controls' class='video' x-webkit-airplay='allow' width='640' height='272' " + poster + ' autoplay="autoplay" bgcolor="black">' +
        '<source src="http://trailers.apple.com/movies' + movieURL + '-tlr1_r640s.mov?width=640&amp;height=272 type="video/mp4">' + '</video>';
//
//
// var suffix = "'?width=640&amp;height=340' x-webkit-airplay='allow' width='640' height='340' autoplay='autoplay' bgcolor='white' style='width: 640px; height: 340px;'>"+"</video>"
    //fullURL = prefix + location + title;
//       var movie = "<video " + "id=sproutPlayer"+ " poster=" + poster + " controls='controls' class='video' x-webkit-airplay='allow' width='640' height='272' " + poster +' autoplay="autoplay" bgcolor="black"> '</video>';
//
//
//
//       	var movie = "<video " + "id=sproutPlayer"+ " poster=" + poster + " controls='controls' class='video' x-webkit-airplay='allow' width='640' height='272' " + poster +' autoplay="autoplay" bgcolor="black">'+
//				'<source src="http://trailers.apple.com/movies' + movieString +'-tlr1_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies' + movieString +'-tlr2_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies' + movieString +'-tlr3_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/lionsgate' + removeLabel +'-tlr1_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/lionsgate' + removeLabel +'-tlr2_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/lionsgate' + removeLabel +'-tlr3_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/independent' + removeLabel +'-tlr1_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/independent' + removeLabel +'-tlr2_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/independent' + removeLabel +'-tlr3_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/'+ newStudio  + removeLabel +'-tlr1_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/'+ newStudio  + removeLabel +'-tlr2_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'<source src="http://trailers.apple.com/movies/'+ newStudio  + removeLabel +'-tlr3_r640s.mov?width=640&amp;height=272' + ' type="video/mp4">' +
//				'</video>';


    return prefix;

  }.property('prefix').cacheable(),

  startFade:function(background) {
    var background = SC.PanelPane.create({
      classNames:'start-fade'.w(),
      layout:{top:0,bottom:0,right:0,left:0},
      contentView:SC.View.extend({
        backgroundColor:'black'
      })

    });
    SproutFlix.justAddedController.set('fadeView', background);
    background.append();
    background.animate('opacity', 0.8, {duration:.5, timing:'ease-in-out'});
    return background;
  },
  removeFade:function() {
    var background = SproutFlix.justAddedController.get('fadeView');

    background.animate('opacity', 0, {duration:.9, timing:'ease-in-out'});
    this.invokeLater(function() {
          background.remove();
        }, 900
    );
  },


  nextTrailer:function(pane) {
    pane.animate('left', 1900, {duration:.5, timing:'ease-in-out'});
    this.invokeLater(function() {
      pane.adjust('left', -2200);

    }, 600);
    this.invokeLater(function() {
      pane.animate('left', 0, {duration:.5, timing:'ease-in-out'});
    }, 900);
    var array = SproutFlix.justAddedController.get('content');
    var trailerArray = array.toArray();
    var current = SproutFlix.justAddedTrailersSelectionController.get('content');

    for (i = 0; i < trailerArray.length; i++) {

      var currentObject = trailerArray.objectAt(i).get('guid');
      var currentPlayingObject = current.get('guid');
      console.log('this is the current object in the arrat = [%@] this is the current trailer object [%@]'.fmt(currentObject, currentPlayingObject));
      if (currentObject === currentPlayingObject) {
        if (currentObject === 79) {
          var playNextTrailer = array.objectAt(0);
          console.log('here is your next trailer [%@]'.fmt(playNextTrailer));
          SproutFlix.justAddedTrailersSelectionController.set('content', playNextTrailer);
          SproutFlix.videoPlayerController.set('content', SproutFlix.parseTrailerURL());
          break;
        } else {
          var playNextTrailer = array.objectAt(currentPlayingObject + 1);
          console.log('here is your next trailer [%@]'.fmt(playNextTrailer));
          SproutFlix.justAddedTrailersSelectionController.set('content', playNextTrailer);
          SproutFlix.videoPlayerController.set('content', SproutFlix.parseTrailerURL());
          break;
        }
      }

    }
  },

  backTrailer:function(pane) {
    pane.animate('right', 1900, {duration:.5, timing:'ease-in-out'});
    this.invokeLater(function() {
      pane.adjust('right', -2200);

    }, 600);
    this.invokeLater(function() {
      pane.animate('right', 0, {duration:.5, timing:'ease-in-out'});
    }, 900);

    var array = SproutFlix.justAddedController.get('content');
    var trailerArray = array.toArray();
    var current = SproutFlix.justAddedTrailersSelectionController.get('content');
    for (i = 0; i < trailerArray.length; i++) {
      var currentObject = trailerArray.objectAt(i).get('guid');
      var currentPlayingObject = current.get('guid');
      console.log('this is the current object in the arrat = [%@] this is the current trailer object [%@]'.fmt(currentObject, currentPlayingObject));
      if (currentObject === currentPlayingObject) {
        if (currentObject === 0) {
          var playNextTrailer = array.objectAt(79);
          console.log('here is your next trailer [%@]'.fmt(playNextTrailer));
          SproutFlix.justAddedTrailersSelectionController.set('content', playNextTrailer);
          SproutFlix.videoPlayerController.set('content', SproutFlix.parseTrailerURL());
          break;
        } else {
          var playNextTrailer = array.objectAt(currentPlayingObject - 1);
          console.log('here is your next trailer [%@]'.fmt(playNextTrailer));
          SproutFlix.justAddedTrailersSelectionController.set('content', playNextTrailer);
          SproutFlix.videoPlayerController.set('content', SproutFlix.parseTrailerURL());
          break;
        }
      }

    }
  },

  addTrailer:function(trailer) {
    SproutFlix.TrailerContainer.push(trailer);
    SproutFlix.TrailerContainerController.set('content', SproutFlix.TrailerContainer);
    var count = SproutFlix.TrailerContainer.length;
    SproutFlix.TrailerContainerController.set('totalTrailers', count);

  } ,
  tomatoDisplay:function(data) {
    //need to had half tomatoes
    var rating = data.ratings;
    var score = rating.critics_score;
    if (score > 75) {
      return '/static/sprout_flix/en/current/source/resources/images/4Stars.png?1314586984';
    } else if (score > 50 && score < 75) {
      return '/static/sprout_flix/en/current/source/resources/images/3Stars.png?1314592612';
    } else if (score > 35 && score < 50) {
      return '/static/sprout_flix/en/current/source/resources/images/2Stars.png?1314592631';
    } else {
      return '/static/sprout_flix/en/current/source/resources/images/1Stars.png?1314592650';
    }
  },

  moveToQueAnimation:function(view, content) {
    var pane = SC.PickerPane.create({
      layout: { right:0,width: 100, height: 100 },
      contentView: SC.View.extend({
        backgroundColor:'black',
        childViews:'posterImage'.w(),
        posterImage:SC.ImageView.design({
          layout:{top:10,bottom:10,right:10,left:10},
          useCanvas:YES,
          useImageQueue: NO,
          value:'/static/sprout_flix/en/current/source/resources/images/movie.png?1313305208'
        })
      })
    }).popup(view);
    pane.animate('left', 1200, {duration:1, timing:'ease-in-out'});
    pane.animate('top', 0, {duration:1, timing:'ease-in-out'});
    pane.animate('opacity', 0, {duration:1.2, timing:'ease-in-out'});
    pane.invokeLater(function() {
      pane.set('opacity', 1);
    }, 1000)

  } ,
  /**
   * HTML 5 Geo location API
   */
  gettingGeoLocation:function() {

    navigator.geolocation.getCurrentPosition(function(pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      var accuracy = pos.coords.accuracy;

      //send it to google maps...
      SproutFlix.mapThisGoogle(latitude, longitude);
    });

  },
  mapThisGoogle:function(latitude, longitude) {

    var latlng = new google.maps.LatLng(latitude, longitude);

    var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeControl: false,
      navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335 km (208 mi) '+
    'south west of the nearest large town, Alice Springs; 450 km '+
    '(280 mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

var infowindow = new google.maps.InfoWindow({
    content: contentString
});

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    //chagne the marker for google maps
    var image = '/static/sprout_flix/en/current/source/resources/images/video.png?1313298187';
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"Uluru (Ayers Rock)"
      //icon: image
    });
    marker.setMap(map);
    infowindow.open(map,marker);


  }
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sprout_flix');