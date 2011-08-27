// ==========================================================================
// Project:   SproutFlix
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
SproutFlix.main = function main() {

    SproutFlix.dataSource = SC.CascadeDataSource.create({

            dataSources: "justAdded mostPopular rottenTomatoes".w(),

            justAdded:SproutFlix.JustAddedDataSource.create({}),
            mostPopular: SproutFlix.MostPopularDataSource.create({}),
            rottenTomatoes:SproutFlix.RottenTomatoes.create({})
          });
    SproutFlix.statechart.initStatechart();

} ;

function main() { SproutFlix.main(); }
