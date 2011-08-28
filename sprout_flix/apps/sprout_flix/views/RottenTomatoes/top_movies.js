sc_require('views/RottenTomatoes/tomatoe_custom_row');
SproutFlix.TopMovies = SC.View.extend({
  layout: { top:0, height:350, left: 0, right:0},

  childViews:'topTen topBar bottomBar'.w(),

  topBar:SC.ToolbarView.design({
    layout: { top: 0, left: 0, right: 0, height: 20 },
    childViews:'title'.w(),
    title:SC.LabelView.design({
      layout: { centerY: 0, height: 24, centerX: 0, width: 200 },
      escapeHTML: NO,
      value:'Top Movies'.loc()
    })
  }),
  bottomBar:SC.ToolbarView.design({
    layout: { bottom: 0, left: 0, right: 0, height: 20 },
    childViews:'title'.w(),
    title:SC.LabelView.design({
      layout: { centerY: 0, height: 24, centerX: 0, width: 200 },
      escapeHTML: NO,
      value:''.loc()
    })
  }),
  topTen:SC.ScrollView.design({
    hasHorizontalScroller: NO,
    layout: { top: 20, bottom:20, left: 0, right:0},

    contentView:SC.ListView.design({
      contentValueKey: "title",
      contentBinding: "SproutFlix.tomatoesMoviesController.arrangedObjects",
      selectionBinding: "SproutFlix.tomatoesMoviesController.selection",
      rowHeight: 100,
      rowSpacing: 2,
      //move to custom view
      exampleView:SproutFlix.TomatoeCustomRow
    })

  })



});