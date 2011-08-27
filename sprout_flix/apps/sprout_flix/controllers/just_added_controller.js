// ==========================================================================
// Project:   SproutFlix.justAddedController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

/** @class

    (Document Your Controller Here)

 @extends SC.Object
 */
SproutFlix.TrailerContainerSelectionController = SC.ObjectController.create({

  contentBinding:'SproutFlix.TrailerContainerController.selection'

});

SproutFlix.TrailerContainerController = SC.ArrayController.create({

  totalTrailers:'',
  isShowingDelete:NO ,
  isShowingBack:NO,
  isShowingSlide:YES

});

SproutFlix.videoPlayerController = SC.ObjectController.create({


});

SproutFlix.justAddedTrailersSelectionController = SC.ObjectController.create({
});

SproutFlix.justAddedSelectionController = SC.ObjectController.create({

  contentBinding:'SproutFlix.justAddedController.selection',

  contentDidChange:function() {

    console.log('this is the content that you selected...[%@]'.fmt(this.get('content')))

  }.observes('content')

});

SproutFlix.justAddedController = SC.ArrayController.create({

  isShowingButtons:NO,
  fadeView:''



});
