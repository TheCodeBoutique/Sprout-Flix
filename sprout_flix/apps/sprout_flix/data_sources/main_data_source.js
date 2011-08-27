// ==========================================================================
// Project:   SproutFlix.MainDataSource
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals SproutFlix */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
sc_require('models/just_added_model');
sc_require('models/most_popular_model');
SproutFlix.JustAddedQuery = SC.Query.local(SproutFlix.JustAdded);
SproutFlix.MostPopularQuery = SC.Query.local(SproutFlix.MostPopular);

SproutFlix.MainDataSource = SC.DataSource.extend({

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {
    SC.Request.getUrl('/%@'.fmt(query.recordType.urlPath))
	    .notify(this, 'fetchDidComplete', store, query)
	    .json().send()

	  return YES;
	},
        /**
         *
         * @param json
         * @param response
         * @param store
         * @param query
         * Process json response from apple trailers
         * We need to create and new json hash an assign guid to it
         * so we can send it to are store to be loaded
         */
  processJson:function(json,response,store,query){

					var results = [];
          var processingType = query.recordType.route;

					for(var i=0; i<json.length; i++) {

                        if(processingType === 'JustAdded'){
                            var newHash = {
                                guid: i,
                                actors: json[i].actors,
                                directors: json[i].directors,
                                genre: json[i].genre,
                                location:  json[i].location,
                                moviesite: json[i].moviesite,
                                poster:json[i].poster,
                                rating: json[i].rating,
                                releasedate: json[i].releasedate,
                                studio: json[i].studio,
                                title:json[i].title,
                                trailers: json[i].trailers
                            }
                        results.push(newHash);

                        }else if(processingType === 'MostPop'){
                            var newHash = {
                                guid: i,
                                actors: json[i].actors,
                                directors: json[i].directors,
                                genre: json[i].genre,
                                location:  json[i].location,
                                moviesite: json[i].moviesite,
                                poster:json[i].poster,
                                rating: json[i].rating,
                                releasedate: json[i].releasedate,
                                studio: json[i].studio,
                                title:json[i].title,
                                trailers: json[i].trailers
                            }
                           results.push(newHash);
                        }
                      }
					return results;
				},

        /**
         * Check response from the server if all is good grab
         * the body of the reponse (json) and send off to be
         * process using processJson so that it can be addded to are store
         * @param response
         * @param store
         * @param query
         */
  fetchDidComplete: function(response, store, query) {

		  	if(SC.ok(response)) {
				var json = response.get('body');
	           var cooked = this.processJson(json, response, store, query);

            /**
             * when process get done load new records into are store
             *
             * @param {SC.Record} recordTypes the record type or array of record types
             * @param {Array} dataHashes array of data hashes to update
             * @param {Array} ids optional array of ids.  if not passed lookup on hashes
             * @returns {Array} store keys assigned to these ids
             */
              store.loadRecords(query.recordType,cooked,cooked.guid);

		 } else store.dataSourceDidErrorQuery(query, response);
	 },


  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
