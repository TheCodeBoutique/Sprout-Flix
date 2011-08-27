// ==========================================================================
// Project:   SproutFlix.RottenTomatoe
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SproutFlix.RottenTomatoe = SC.Record.extend({

  link_template:SC.Record.attr(String),
  links:SC.Record.attr(String),
  movies:SC.Record.attr(String),
  total:SC.Record.attr(Number)


}) ;
 SproutFlix.RottenTomatoe.mixin({
  route:'tomatoe'
});
