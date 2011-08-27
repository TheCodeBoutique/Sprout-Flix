// ==========================================================================
// Project:   SproutFlix
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
SproutFlix = SC.Application.create(
  /** @scope SproutFlix.prototype */ {

  NAMESPACE: 'SproutFlix',
  VERSION: '0.1.0',

//  store: SC.Store.create().from(SC.Record.fixtures)

    store: SC.Store.create({ commitRecordsAutomatically: YES }).from('SproutFlix.MainDataSource')


}) ;
