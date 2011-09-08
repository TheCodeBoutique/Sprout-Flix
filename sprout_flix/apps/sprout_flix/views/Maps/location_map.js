SproutFlix.LocationMap = SC.View.extend({
  layout: { bottom:0, height:380, left: 0, right:0},
  escapeHTML:NO,
  render: function(context, firstTime) {
    context.push('<div id="map" class="maps">');
    context.push('</div>');

  }
});