// ==========================================================================
// Project:   SproutFlix.JustAdded
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
SproutFlix.JustAdded = SC.Record.extend({


    actors:SC.Record.attr(String),
    directors:SC.Record.attr(String),
    genre:SC.Record.attr(String),
    location:SC.Record.attr(String),
    moviesite:SC.Record.attr(String),
    poster:SC.Record.attr(String),
    rating:SC.Record.attr(String),
    //releasedate:SC.Record.attr(SC.DateTime),
    releasedate:SC.Record.attr(String),
    studio:SC.Record.attr(String),
    title:SC.Record.attr(String),
    trailers:SC.Record.attr(String),

    parseTrailerURL:function(){
        var tmpLoc, tmpTitle,
            title, location,
            prefix,fullURL;

        tmpLoc = this.get('location');
        tmpTitle = this.get('title');

        title = tmpTitle.toLowerCase().split(' ').join('').replace('ii',2).replace('part2',2);
        location = tmpLoc.replace("/trailers","");

        prefix = "<video id='' class= 'video' type= 'video/mp4' src=http://trailers.apple.com/movies"
//        var suffix = "'?width=640&amp;height=340' x-webkit-airplay='allow' width='640' height='340' autoplay='autoplay' bgcolor='white' style='width: 640px; height: 340px;'>"+"</video>"
       fullURL = prefix + location + title;

       return fullURL ;

    }.property('fullURL').cacheable()

}) ;
 SproutFlix.JustAdded.mixin({
  route:'JustAdded',
  urlPath: 'just_added'
}) ;