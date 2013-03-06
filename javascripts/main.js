$(function () {
  var placeholder = $('#placeholder');
  var data = [];
  var options = {
    xaxis: {
      mode: 'time',
      timeformat: '%m/%d',
      min: (new Date(2013, 0, 7)).getTime(),
		  max: (new Date(2013, 2, 1)).getTime()
    },
    points: {
      show: true
    },
    lines: {
      show: true
    }
  };

  console.log('calling heroku');

  $.ajax({
    type: 'GET',
    url: 'http://goingdown.heroku.com',
    crossDomain: true,
    dataType: 'jsonp',
  }).success(function(responseData, textStatus, jqXHR) {
     console.log('success');
  }).error(function (responseData, textStatus, errorThrown) {
     console.log(responseData);
  });
});
