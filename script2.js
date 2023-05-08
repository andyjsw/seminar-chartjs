d3.csv('newcsv.csv').then(showData);

function showData(data) {
    var nMeal = [1, 2, 3, 4, 5, 6, 7, 8];
    var nP = [];
    var nPIssue = [];
    var percent = [];
    for (var i = 0; i <= 8; ++i) {
      nP.push(0);
      nPIssue.push(0);
      percent.push(0);
    }
    for (var i = 0; i < data.length; ++i) {
      nP[data[i]['Number of meals per day']-1] += 1;
      if (data[i]['Health issue during lockdown'] == "YES") {
        nPIssue[data[i]['Number of meals per day']-1] += 1;
      }
    }

    for (var i = 0; i <= 8; ++i) {
      percent[i] = (nPIssue[i]/nP[i])*100;
      // console.log(percent[i]);
    }

    makeChart(nMeal, percent, nP, nPIssue);
}

function makeChart(nMeal, percent, nP, nPIssue) {
  var chart = new Chart('chart2', {
    type: 'bar',
    data: {
        labels: nMeal,
        datasets: [
          {
            label: 'Tổng số đối tượng',
            data: nP,
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            type: 'line',
            order: 1,
            yAxisID: 'second-y-axis'
          },
          {
            label: 'Số đối tượng có vấn đề sức khỏe',
            data: nPIssue,
            fill: false,
            backgroundColor: 'red',
            borderColor:'red',
            type: 'line',
            order: 0,
            yAxisID: 'second-y-axis'
          },
          {
            type: 'bar',
            label: 'Tỉ lệ đối tượng có vấn đề sức khỏe',
            data: percent,
            backgroundColor: '#B0E0E6',
            order: 2,
            yAxisID: 'first-y-axis'
          }
        ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: "Tương quan giữa số bữa ăn trong ngày với tỉ lệ mắc vấn đề sức khỏe",
        fontSize: 20,
      },
      scales: {
        xAxes: [{
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: 'Số lượng bữa ăn trong ngày'
          }
        }],
        yAxes: [{
            id: 'first-y-axis',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Tỉ lệ'
            }
        }, {
            id: 'second-y-axis',
            type: 'linear',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'Số lượng đối tượng'
            }
        }]
      }
    },
  });
}