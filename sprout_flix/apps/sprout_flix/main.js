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

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  


  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: SproutFlix.contactsController.set('content',SproutFlix.contacts);
    SproutFlix.dataSource = SC.CascadeDataSource.create({

            dataSources: "justAdded mostPopular".w(),

            justAdded:SproutFlix.JustAddedDataSource.create({}),
            mostPopular: SproutFlix.MostPopularDataSource.create({})
           // experience:Community.ExperiencesDataSource.create({})
          });
    SproutFlix.statechart.initStatechart();

} ;

function main() { SproutFlix.main(); }
