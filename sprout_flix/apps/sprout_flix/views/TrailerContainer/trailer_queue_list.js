sc_require('views/TrailerContainer/trailer_queue_custom_row');
sc_require('views/TrailerContainer/trailer_details');
SproutFlix.TrailerQueueList = SC.PickerPane.extend({

  layout: { width: 400, height: 400 },
  contentView:SC.View.design({
    childViews:'trailerList topBar bottomBar trailerDetails'.w(),

    topBar:SC.ToolbarView.design({
      layout:{top:0,height:35},
      anchorLocation:SC.ANCHOR_TOP
    }),
    bottomBar:SC.ToolbarView.design({
      layout:{bottom:0,height:35},
      anchorLocation:SC.ANCHOR_BOTTOM,
      childViews:'back edit'.w(),

      back:SC.ButtonView.design({
        layout:{width:90,height:30,centerY:0},
        isVisibleBinding:'SproutFlix.TrailerContainerController.isShowingBack',
        title:'back'.loc(),
        target:SproutFlix.statechart,
        action:'doSlideBack'
      }),

      edit:SC.ButtonView.design({
        layout:{right:5,width:90,height:30,centerY:0},
        title:'edit'.loc(),
        target:SproutFlix.statechart,
        action:'doEditList',
        isDefault:YES
      })
    }),

    trailerDetails:SproutFlix.TrailerDetails.create({
      layout: { width: 400, height: 365, left: -400, top:35}
    }),



    trailerList:SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { width: 400, height: 365, left:0, top:35},

      contentView:SC.ListView.design({
        contentValueKey: "title",
        contentBinding: "SproutFlix.TrailerContainerController.content",
        selectionBinding: "SproutFlix.TrailerContainerController.selection",
        rowHeight: 80,
        rowSpacing: 2,
        exampleView:SproutFlix.TrailerQueueCustomRow
      })
    })
  })

});
