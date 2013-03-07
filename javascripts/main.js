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

  var options = {
    type: 'GET',
    url: 'http://goingdown.heroku.com',
    crossDomain: true
  };

  var request = $.ajax(options);

  request.done(updateGraph);
  request.fail(handleError);
  request.always(requestCompleted);
});

function updateGraph(data, textStatus, jqXHR) {
  console.log('Ajax call sucessful...updating graph.');
}

function handleError(jqXHR, textStatus, errorThrown) {
  console.log(jqXHR);
}

function requestCompleted(data, textStatus, jqXHR) {
  console.log('Ajax call complete: ' + textStatus);
}
