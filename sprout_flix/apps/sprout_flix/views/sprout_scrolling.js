SproutFlix.SproutScrolling = SC.ListView.extend({



	itemsPerRow: function() {
		var rowHeight = this.get('rowHeight');
		var frame =  this.get('frame');
		var totalContent = 80;

		frame.width += 1200;

    return totalContent ;
  }.property('totalContent').cacheable(),

  /** @private
    Find the contentIndexes to display in the passed rect. Note that we
    ignore the width of the rect passed since we need to have a single
    contiguous range.
  */

  contentIndexesInRect: function(rect) {
    var rowHeight = this.get('rowHeight') || 48;
    var itemsPerRow = this.get('itemsPerRow');
    var min = Math.floor(SC.minY(rect) / rowHeight) * itemsPerRow;
    var max = Math.ceil(SC.maxY(rect) / rowHeight) * itemsPerRow ;

    return SC.IndexSet.create(min, max);
  },

  /** @private */
  layoutForContentIndex: function(contentIndex) {
    var rowHeight = this.get('rowHeight') || 48;
		var clippingFrame = this.get('clippingFrame');
		var f = this.get('frame');

		//frame.width += 100;

    var frameWidth = this.get('clippingFrame').width;

    var itemsPerRow = this.get('itemsPerRow');
		var columnWidth = Math.floor(frameWidth/itemsPerRow)*15;
    var row = Math.floor(contentIndex / itemsPerRow);
    var col = contentIndex - (itemsPerRow*row);

		console.log('this is a cal for width');


    return {
      left: col * columnWidth,
      top: row * rowHeight,
      height: rowHeight,
      width: columnWidth,
    };
  },

	/** @private
    If the size of the clipping frame changes, all of the item views
	    on screen are potentially in the wrong position.  Update all of their
	    layouts if different.
	  */
	  _gv_clippingFrameDidChange: function() {
	    var nowShowing = this.get('nowShowing');
			var itemView;
			var idx;
			var len;

			this.notifyPropertyChange('itemsPerRow');

	    len = nowShowing.get('length');


	    for (idx=0; idx < len; idx++) {
	      itemView = this.itemViewForContentIndex(idx);
	      itemView.adjust(this.layoutForContentIndex(idx));
	    }

	  }.observes('clippingFrame'),

computeLayout: function() {
    var content = SproutFlix.justAddedController.get('content');
    var count = (content) ? content.get('length') : 0;
    var rowHeight = this.get('rowHeight') || 48;
    var itemsPerRow = this.get('itemsPerRow');
    var rows = Math.ceil(count / itemsPerRow) ;

    // use this cached layout hash to avoid allocing memory...
    var ret = this._cachedLayoutHash ;
		console.log('this is cachedLayoutHash');
		console.log(ret);
    if (!ret) ret = this._cachedLayoutHash = {};



    // set minHeight
    ret.minHeight = rows * rowHeight ;
		console.log('return min height');
		console.log(ret.minHeight);
    this.calculatedHeight = ret.minHeight;
		console.log('return calculatedHeight');
		console.log(this.calculatedHeight)
    return ret;
  },


}) ;