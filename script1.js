d3.csv('newcsv.csv').then(showData);

function showData(data) {
    let map = new Map;
    var sms = [];
    for (var i = 0; i < data.length; ++i) {
      var sm = data[i]['Prefered social media platform'];
      if (map.has(sm)) {
        map.set(sm, map.get(sm)+1);
      } else {
        map.set(sm, 1);
        sms.push(sm);
      }
    }

    var cnt = [];
    for (var i = 0; i < sms.length; ++i) {
      cnt.push(map.get(sms[i]));
    }

    makeChart(sms, cnt);
}

function makeChart(sms, cnt) {
  var colors = ['#ff6400',
    '#4169e1',
    '#ff69b4',
    '#00ff7f',
    '#94faff',
    '#db0482',
    '#ffff3c',
    '#d186ff',
    '#f62b80',
    '#ff9da5',
    '#9370db',
    '#dc143c',
    '#32cd32',
    '#ffd700',]
  var chart = new Chart('chart1', {
    type: 'pie',
    data: {
        labels: sms,
        datasets: [
          {
            data: cnt,
            backgroundColor: colors
          }
        ]
    },
    options: {
      title: {
        display: true,
        text: "Các nền tảng mạng xẫ hội được yêu thích nhất",
        fontSize: 20,
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "black",
          fontSize: 15,
          padding: 20,
          boxWidth: 20,
          fontFamily: "Arial",
        }
      }
    },
  });
}