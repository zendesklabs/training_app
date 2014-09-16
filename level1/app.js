(function(){

  return {
    defaultState: 'loading',

    requests: {
      getUserDetails: function(email) {
        return {
          url: 'http://appstraining.herokuapp.com/api/users.json?email=' + email,
          type: 'GET',
          dataType: 'json'
        };
      }
    },

    events: {
      'app.activated'       : 'activated',
      'getUserDetails.done' : 'showUserDetails'
    },

    activated: function() {
      this.ajax('getUserDetails', this.ticket().requester().email());
    },

    showUserDetails: function(users) {
      var user = users[1];

      this.switchTo('crm_details', {"user" : user});
    },
  };

}());
