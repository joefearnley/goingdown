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

  for(i = 0; i < weightData.length; i++) {
    var time = new Date(weightData[i].date).getTime();
    var pounds = parseFloat(weightData[i].pounds);
    var d = [time, pounds];
    data.push(d);
  }

  $.plot(placeholder, 
    [
      {
        data: data
      }
    ],
    options);
});
