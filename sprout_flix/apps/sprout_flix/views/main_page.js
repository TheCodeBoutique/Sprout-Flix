// ==========================================================================
// Project:   SproutFlix - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */
sc_require('views/JustAdded/just_added_custom_cell');
sc_require('views/JustAdded/just_added_grid_view');
sc_require('views/JustAdded/sprout_horizontal');
sc_require('views/sprout_scrolling');
sc_require('views/RottenTomatoes/top_movies');
// This page describes the main user interface for your application.
SproutFlix.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'contentSplit topBar bottomBar'.w(),

    topBar:SC.ToolbarView.design({
      layout:{top:0,height:60},
      anchorLocation:SC.ANCHOR_TOP,
      childViews:'movieQue badgeView badgeNumber switchButton'.w(),

      badgeNumber:SC.LabelView.design({
        layout:{right:41,top:3,height:25,width:25},
        fontWeight: SC.BOLD_WEIGHT,
        valueBinding:'SproutFlix.TrailerContainerController.totalTrailers'

      }),

      badgeView:SC.ImageView.design({
        layout:{right:50,top:0,height:25,width:25},
        useCanvas:YES,
        useImageQueue: NO,
        value: sc_static('resources/images/badge.png')
      }),

      movieQue:SC.ButtonView.design({
        layout:{right:60,centerY:0,height:45,width:80},
        themeName: 'square',
        controlSize: SC.JUMBO_CONTROL_SIZE,
        icon:sc_static('resources/images/video.png'),
        action:'click',
        click:function() {
          SproutFlix.statechart.sendEvent('doShowTrailerList', this);
        }

      }),

      switchButton:SC.ButtonView.design({
        layout:{right:150,centerY:0,height:45,width:80},
        themeName: 'square',
        controlSize: SC.JUMBO_CONTROL_SIZE,
        title:'switch',
        action:'click',
        click:function() {
          SproutFlix.statechart.sendEvent('doChangeLayout', this);
        }

      })
    }),
    bottomBar:SC.ToolbarView.design({
      layout:{bottom:0,height:45},
      anchorLocation:SC.ANCHOR_BOTTOM
    }),


    contentSplit: SC.SplitView.design({
      layout: { left: 0, top: 60, right: 0, bottom: 32 },
      layoutDirection: SC.LAYOUT_HORIZONTAL,
      autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
      defaultThickness: 0.8,

      topLeftView: SC.View.design({
        layout: { top: 75, bottom: 32, width: 200 },
        childViews: 'topTenMovies'.w(),

        topTenMovies:SproutFlix.TopMovies.create({})
      }),

      topLeftMaxThickness: 250,

      dividerView: SC.SplitDividerView.design({layout: {}}),

      bottomRightView:SC.View.design({
        layout: { centerX:0, top:0, bottom:0, centerY:0 },
        childViews:'grid horizontal'.w(),

        grid:SproutFlix.JustAddedGridView.design({}),

        horizontal:SproutFlix.SproutHorizontal.design({})

      })
    })
  })
});

//regular grid view

