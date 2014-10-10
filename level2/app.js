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
      'getUserDetails.done' : 'showUserDetails',
      'getUserDetails.fail' : 'fail'
    },

    activated: function() {
      this.ajax('getUserDetails', this.ticket().requester().email());
    },

    showUserDetails: function(users) {
      var count = 0;

      for (var user in users) {
        users[user].external_id = user;
        count++;
      }

      this.switchTo('crm_details', {"users" : users, "count" : count});
    },

    fail: function(data) {
      this.switchTo('fetch_fail');
    }
  };

}());
