d3.csv("newcsv.csv").then(showData);

function showData(data) {
  var dt = new Array(4);
  for (var i = 0; i < 6; ++i) {
    dt[i] = 0;
  }
  for (var i = 0; i < data.length; ++i) {
    dt[0] += parseInt(data[i]["Time spent on Online Class"]);
    dt[1] += parseInt(data[i]["Time spent on self study"]);
    dt[2] += parseInt(data[i]["Time spent on fitness"]);
    dt[3] += parseInt(data[i]["Time spent on sleep"]);
    dt[4] += parseInt(data[i]["Time spent on social media"]);
    dt[5] += parseInt(data[i]["Time spent on TV"]);
  }
  makeChart(dt);
}

function makeChart(input) {
  var label = [
    "Học online",
    "Tự học",
    "Thể dục thể thao",
    "Ngủ",
    "Mạng xã hội",
    "Xem TV",
  ];
  var chart = new Chart("chart4", {
    type: "bar",
    data: {
      labels: label,
      datasets: [
        {
          // label: label,
          data: input,
          backgroundColor: ['#ff6400',
          '#4169e1',
          '#ff69b4',
          '#00ff7f',
          '#94faff',
          '#db0482',]
        },
      ],
    },

    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Thời gian (giờ)",
            },
          },
        ],
      },
      title: {
        display: true,
        text: "Tổng thời gian dành cho các hoạt động",
      },
      legend: {
        display: false
      }
    },
  });
}
