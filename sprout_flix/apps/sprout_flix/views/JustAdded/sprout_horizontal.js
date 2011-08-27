
sc_require('views/sprout_scrolling');

SproutFlix.SproutHorizontal = SC.ScrollView.extend({
  alwaysBounceVertical: NO,
  autohidesHorizontalScroller: NO,
  hasVerticalScroller: NO,
  borderStyle: SC.BORDER_NONE,
  layout: { top:0, height: 285, left: 0, right:0},

  contentView:SC.View.design({
    layout:{top:0,bottom:0,width:13020,left:0},
    childViews:'contentView'.w(),

    contentView: SproutFlix.SproutScrolling.design({
      layout:{height:200,left:0,right:0,top:0},

      classNames:'just-added-grid'.w(),
      contentBinding: 'SproutFlix.justAddedController.arrangedObjects',
      selectionBinding: 'SproutFlix.justAddedController.selection',
      contentValueKey: "title",
      contentIconKey: "poster",
      exampleView: SproutFlix.JustAddedCustomCell,
      hasContentIcon:  YES,
      escapeHTML: NO,
      rowHeight: 270,
      columnWidth: 170,
      actOnSelect:YES
    })
  })
});