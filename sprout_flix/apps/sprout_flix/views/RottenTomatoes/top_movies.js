sc_require('views/RottenTomatoes/tomatoe_custom_row');
sc_require('views/RottenTomatoes/tomatoe_list_view');

sc_require('views/RottenTomatoes/ComingSoon/soon_custom_row');
sc_require('views/RottenTomatoes/ComingSoon/soon_list_view');

sc_require('views/RottenTomatoes/DVD/dvd_custom_row');
sc_require('views/RottenTomatoes/DVD/dvd_list_view');

SproutFlix.TopMovies = SC.View.extend({
  layout: { top:0, height:350, left: 0, right:0},

  childViews:'topTen topBar subBar bottomBar'.w(),

  topBar:SC.ToolbarView.design({
    layout: { top: 0, left: 0, right: 0, height: 30 },
    childViews:'title'.w(),
    title:SC.LabelView.design({
      layout: { centerY: 0, height: 24, left:0,right:0  },
      controlSize: SC.LARGE_CONTROL_SIZE,
      needsEllipsis:YES,
      textAlign:SC.ALIGN_CENTER,
      fontWeight: SC.BOLD_WEIGHT,
      escapeHTML: NO,
      valueBinding:'SproutFlix.tomatoesMoviesController.selectionTitle'
    })
  }),

  subBar:SC.ToolbarView.design({
    layout: { top: 30, left: 0, right: 0, height: 30 },
    childViews:'topTen newDVD comingSoon'.w(),

    topTen:SC.ButtonView.design({
      layout: {top:3,left: 10, width: 60, height: 25 },
      title:'Top'.loc(),
      target:'SproutFlix.statechart',
      action:'doShowTopTen'
    }),

    newDVD:SC.ButtonView.design({
      layout: {top:3,left: 90, width: 60, height: 25 },
      title:'DVD'.loc(),
      target:'SproutFlix.statechart',
      action:'doShowTopTen'

    }),

    comingSoon:SC.ButtonView.design({
      layout: {top:3,left: 170, width: 60, height: 25 },
      title:'Soon'.loc(),
      target:'SproutFlix.statechart',
      action:'doShowTopTen'

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


  topTen:SC.View.design({
    layout: { top: 60, bottom:20, left: 0, right:0},
    childViews:'topDVD commingSoon ten'.w(),

    topDVD:SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 0, height:350, left: -250, width:250},

      contentView:SproutFlix.DvdListView.design({
        contentValueKey: "title",
        contentBinding: "SproutFlix.newDvdController.arrangedObjects",
        selectionBinding: "SproutFlix.newDvdController.selection",
        delegate: SproutFlix.tomatoesMoviesController,
        actOnSelect:YES,
        target:SproutFlix.statechart,
        rowSpacing: 2,
        exampleView:SproutFlix.DvdCustomRow
      })

    }),

    commingSoon:SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 0, height:350, left: -250, width:250},

      contentView:SproutFlix.SoonListView.design({
        contentValueKey: "title",
        contentBinding: "SproutFlix.comingSoonController.arrangedObjects",
        selectionBinding: "SproutFlix.comingSoonController.selection",
        delegate: SproutFlix.tomatoesMoviesController,
        actOnSelect:YES,
        target:SproutFlix.statechart,
        rowSpacing: 2,
        exampleView:SproutFlix.SoonCustomRow
      })

    }),


    ten:SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 0, bottom:0, left: 0, width:250},

      contentView:SproutFlix.TomatoeListView.design({
        contentValueKey: "title",
        contentBinding: "SproutFlix.tomatoesMoviesController.arrangedObjects",
        selectionBinding: "SproutFlix.tomatoesMoviesController.selection",
        delegate: SproutFlix.tomatoesMoviesController,
        actOnSelect:YES,
        target:SproutFlix.statechart,
        rowSpacing: 2,
        exampleView:SproutFlix.TomatoeCustomRow
      })

    })
  })



});