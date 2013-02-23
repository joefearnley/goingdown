$(function () {
  var placeholder = $('#placeholder');
  var data = [];
  var options = {
    xaxis: {
      mode: 'time',
      timeformat: '%m-%d'
    }
  };

//var t = new Date('2012-02-12');
//console.log(t);
//console.log(t.getTime());

  for(i = 0; i < weightData.length; i++) {
    var time = new Date(weightData[i].date).getTime();
    var pounds = parseFloat(weightData[i].pounds);

    var d = [time, pounds];

    data.push(d);
  }

  console.log(data);

  $.plot(placeholder, 
    [
      {
        data: data,
        points: {
          show: true
        },
        lines: {
          show: true
        }
      }
    ],
    options);
});
