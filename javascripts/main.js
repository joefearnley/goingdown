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

  var options = {
    type: 'GET',
    url: 'http://goingdown.heroku.com',
    crossDomain: true
  };

  var request = $.ajax(options);

  request.done(function(data, textStatus, jqXHR) {
    console.log('Ajax call sucessful...updating graph.');
  /*
    for(i = 0; i < weightData.length; i++) {
      var time = new Date(weightData[i].date).getTime();
      var pounds = parseFloat(weightData[i].pounds);
      var d = [time, pounds];
      data.push(d);
    }

    $.plot(placeholder,[{data: data}], options);
*/
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log('Error encountered: ' + textStatus);
  });

  request.always(function(data, textStatus, jqXHR) {
    console.log('Ajax call complete: ' + textStatus);
  });
});




