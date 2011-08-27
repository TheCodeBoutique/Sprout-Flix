SproutFlix.statechart = SC.Statechart.create({

  initialState: 'rootState',

  rootState: SC.State.extend({

      initialSubstate:'LoadingDataState',

      LoadingDataState: SC.State.plugin('SproutFlix.LoadingDataState'),
      MainTrailerState: SC.State.plugin('SproutFlix.MainTrailerState')
   //      AuthenticatingUserState: SC.State.plugin('Authoring.AuthenticatingUserState'),
//      LoggedInState: SC.State.plugin('Authoring.LoggedInState'),
//      SignUpState: SC.State.plugin('Authoring.SignUpState'),
//      CampaignSelectionState: SC.State.plugin('Authoring.CampaignSelectionState'),
//      NewCampaignState: SC.State.plugin('Authoring.NewCampaignState'),
//      DashboadState: SC.State.plugin('Authoring.DashboadState')
		  })
  });