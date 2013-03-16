$(function () {
  var options = {
    type: 'GET',
    url: 'http://goingdown.herokuapp.com',
    crossDomain: true,
    dataType: 'json'
  };

  var request = $.ajax(options);

  request.done(function(data, textStatus, jqXHR) {
    var weightData = [];
    for(i = 1; i < data.length; i++) {
      var time = new Date(data[i].date).getTime();
      var pounds = parseFloat(data[i].pounds);
      var d = [time, pounds];
      weightData.push(d);
    }

    var placeholder = $('#placeholder');
    var options = {
      xaxis: {
        mode: 'time',
        timeformat: '%m/%d',
        min: (new Date(2013, 0, 7)).getTime(),
		    max: (new Date(2013, 3, 1)).getTime()
      }
    };

    $.plot(placeholder,[{
        data: weightData
      }],
      options
    );
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);

    $('#placeholder').addClass('errorThrownror').html('Error encountered fetching data: ' + jqXHR.responseText);
  });

  request.always(function(data, textStatus, jqXHR) {
    $('#loading').hide();
  });
});