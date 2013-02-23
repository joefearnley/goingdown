
var placeholder = $('#placeholder');
var data = [];
var options = {
  xaxis: {
    mode: 'time',
    timeformat: '%Y-%m-%d'
  },
  series: {
    points: {
      line: true,
      show: true
    }
  }
};

//console.log(data);


for(i = 0; i < weightData.length; i++) {

  var d = [weightData[i].pounds, weightData[i].date];
  data.push(d);
}

console.log(data);

$.plot(placeholder, data, options);
