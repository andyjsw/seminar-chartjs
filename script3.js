d3.csv("newcsv.csv").then(showData);

function showData(data) {
  // thống kê tương quan về thời gian tự học (self study) và độ tuổi (age) với x là độ tuổi, y là thời gian tự học
  var age_self_study = new Array();
  for (var i = 0; i < data.length; ++i) {
    age_self_study.push({
      x: data[i]["Time spent on self study"],
      y: data[i]["Age of Subject"],
      region : data[i]["Region of residence"],
    });
  }
  makeChart(age_self_study);
}

function makeChart(input) {

  var dataset = {
    label: 'Thời gian tự học và độ tuổi',
    data: input, 
    pointBackgroundColor: input.map(function(d) {return d.region == "Delhi-NCR" ? 'rgba(54, 162, 235, 1)' : 'rgba(255, 99, 132, 1)'}), // Màu nền cho các điểm dữ liệu
    showLine: false,
    borderWidth: 1, // Độ dày đường viền
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
  };

  var chartOptions = {
    title: {
      display: true,
      text: 'Thống kê tương quan về thời gian tự học (self study) và độ tuổi (age) với x là thời gian tự học, y là độ tuổi, màu xanh là Delhi-NCR, màu đỏ là ngoài Delhi-NCR '
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        scaleLabel: {
          display: true,
          labelString: 'Thời gian tự học'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Độ tuổi'
        }
      }]
    }
  };

  // Vẽ biểu đồ scatter
  new Chart('chart3', {
    type: 'scatter',
    data: {
      datasets: [dataset],
    },
    options: chartOptions
  });
}