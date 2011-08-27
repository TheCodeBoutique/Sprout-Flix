// ==========================================================================
// Project:   SproutFlix.MostPopular
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SproutFlix.MostPopular = SC.Record.extend({

    actors:SC.Record.attr(String),
    directors:SC.Record.attr(String),
    genre:SC.Record.attr(String),
    location:SC.Record.attr(String),
    moviesite:SC.Record.attr(String),
    poster:SC.Record.attr(String),
    rating:SC.Record.attr(String),
    releasedate:SC.Record.attr(SC.DateTime),
    studio:SC.Record.attr(String),
    title:SC.Record.attr(String),
    trailers:SC.Record.attr(String)

});
 SproutFlix.MostPopular.mixin({
  route:'MostPop',
  urlPath: 'most_pop'
});