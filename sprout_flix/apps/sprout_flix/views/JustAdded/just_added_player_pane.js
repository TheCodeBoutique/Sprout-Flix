SproutFlix.JustAddedPlayerPane = SC.PanelPane.extend({
  classNames:'player-pane'.w(),
  isHovering:NO,
  layout: { top: 0, bottom: 0, left: 0, right: 0 },
  contentView: SC.View.design({

    classNames:'player-pane'.w(),
    childViews:'playerView exitButton nextButton backButton'.w(),

    nextButton:SC.ButtonView.design({
      classNames:'next-button'.w(),
      layout: { centerY: 0, height:40, right: 5, width:150},
      title:'Next'.loc(),
      action:'next',
      next:function() {
        var pane = this.parentView.playerView;
        SproutFlix.nextTrailer(pane);
      }
    }),

    backButton:SC.ButtonView.design({
      classNames:'back-button'.w(),
      layout: { centerY: 0, height:40, left: 5, width:150},
      title:'back'.loc(),
      action:'back',
      back:function() {
        var pane = this.parentView.playerView;
        SproutFlix.backTrailer(pane);

      }
    }),

    exitButton:SC.ImageView.design({
      isVisibleBinding:'.parentView.isHovering',
      layout: { left:0, top:0, height:45,width:45 },
      useCanvas:YES,
      useImageQueue: NO,
      value:sc_static('resources/images/close_button.png'),
      mouseDown:function(evt) {
        SproutFlix.removeFade();
        this.parentView.parentView.remove();
      }
    }),

    playerView:SC.View.design({
      childViews:'moviePlayer'.w(),

      moviePlayer:SC.LabelView.extend({
        layout:{centerX:0,centerY:0,width:640,height:272},
        escapeHTML:NO,
        valueBinding:'SproutFlix.videoPlayerController.content',
        mouseEntered: function(evt) {
          console.log('hovering');
          this.parentView.set('isHovering', YES);
          SproutFlix.justAddedController.set('isShowingButtons', YES);
          return YES;
        },

        mouseExited: function() {
          console.log('not hovering');
          this.parentView.set('isHovering', NO);

          //SproutFlix.justAddedController.set('isShowingButtons',NO);
          return YES;
        },

        backgroundColor:'black'
        //dividerView:SC.SplitDividerView.design({layout:{left:180,width:1,top:10,bottom:10}})
      })
    })
  })
});