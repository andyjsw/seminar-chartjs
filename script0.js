d3.csv('newcsv.csv').then(showData);

function showData(data) {
    var mx = new Array(61);
    for (var i = 0; i <= 60; ++i) {
        mx[i] = 0;
    }
    for (var i = 0; i < data.length; ++i) {
        mx[data[i]['Age of Subject']-1] += 1;
        // console.log(mx[data[i]['Age of Subject']]);
    }

    makeChart(mx);
}

function makeChart(input) {
  // players is an array of objects where each object represents a player
  var age = [];
  for (var i = 1; i <= 60; ++i) {
    age.push(i);
  }
  let delayed;

  var chart = new Chart('chart0', {
    type: 'bar',
    data: {
        labels: age,
        datasets: [
          {
            label: 'Số lượng đối tượng',
            data: input,
            backgroundColor: 'blue'
          }
        ]
    },
    options: {
        responsive: true,
        title: {
          display: true,
          text: "Thống kê số lượng đối tượng dựa theo tuổi",
          fontSize: 20,
        },
        legend: {
          display: true
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        scales: {
          xAxes: [{
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'Tuổi'
            }
          }],
          yAxes: [{
              type: 'linear',
              position: 'left',
              scaleLabel: {
                display: true,
                labelString: 'Số lượng'
              }
          }]
        },
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 100},
              y2: {min: -5, max: 5}
            },
          }
        }
    },
  });
}