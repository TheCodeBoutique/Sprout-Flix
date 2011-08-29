// ==========================================================================
// Project:   SproutFlix.tomatoesController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

/** @class

    (Document Your Controller Here)

 @extends SC.Object
 */
SproutFlix.tomatoesMovieSelectionController = SC.ArrayController.create({

  //contentBinding:'SproutFlix.tomatoesMoviesController.selection'
});

SproutFlix.tomatoesMoviesController = SC.ArrayController.create(SC.CollectionRowDelegate, {

  allowsMultipleSelection: NO,
  selection: null,

  customRowHeightIndexes: SC.IndexSet.create(),
  rowHeight: 100,

  selectionDidChange: function() {

    var selectedSet = this.selection.indexSetForSource(this);
    if (selectedSet != null) {
      var index = selectedSet.min();
      this.set('customRowHeightIndexes', SC.IndexSet.create(index, 1));
    } else {
      this.set('customRowHeightIndexes', SC.IndexSet.create());
    }
  }.observes('selection'),

  contentIndexRowHeight: function(view, content, contentIndex,rowHeight) {
    return 175;
  }

});

SproutFlix.tomatoesController = SC.ObjectController.create({



});
