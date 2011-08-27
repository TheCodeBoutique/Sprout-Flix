SproutFlix.TrailerDetails = SC.View.extend({
    classNames:'trailer-selection-background'.w(),
  childViews:'poster title studio movieSite rating releaseDate genre directors actors'.w(),


  poster:SC.ImageView.design({
    classNames:'trailer-selection-poster'.w(),
    layout:{top:5,left:5,height:200,width:120},
    useImageQueue: NO,
    valueBinding:'SproutFlix.TrailerContainerSelectionController.poster'
  }),

  title:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:5 ,left:140,width:200,height:30},
    escapeHTML:NO,
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.title').transform(function(val) {
      return 'Title: ' + val;
    })

  }),

  movieSite:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:25 ,left:140,width:200,height:35},
    escapeHTML:NO,
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.moviesite').transform(function(val) {

      return 'Website: ' + '<a href="">' + val + '</a>';
    })

  }),

  studio:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:50 ,left:140,width:200,height:30},
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.studio').transform(function(val) {
      return 'Studio: ' + val;
    })
  }),

  rating:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:75 ,left:140,width:200,height:30},
    escapeHTML:NO,
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.rating').transform(function(val) {

      return 'rating: ' + val;
    })

  }),

  releaseDate:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:100 ,left:140,width:200,height:30},
    escapeHTML:NO,
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.releasedate').transform(function(val) {
      var date = val.replace('00:00:00 -0700', '');
      return 'Release date: ' + date;
    })
  }),

  genre:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:125 ,left:140,width:200,height:30},
    escapeHTML:NO,
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.genre').transform(function(val) {
      return 'Genre: ' + val;
    })
  }),

  directors:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:150 ,left:140,width:200,height:30},
    escapeHTML:NO,
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.directors').transform(function(val) {
      return 'Directors: ' + val;
    })
  }),
  actors:SC.LabelView.design({
    classNames:'trailer-selection-label'.w(),
    layout:{top:180 ,left:140,width:200,height:60},
    escapeHTML:NO,
    valueBinding:SC.binding('SproutFlix.TrailerContainerSelectionController.actors').transform(function(val) {
      return 'Actors: ' + val;
    }),
    mouseEntered:function() {
      this.$().addClass('trailer-selection-label-hover');
      return YES;
    },
    mouseExited:function() {
      this.$().removeClass('trailer-selection-label-hover');
      return YES;
    }
  })

});