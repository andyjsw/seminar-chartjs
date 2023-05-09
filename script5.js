d3.csv("correlation_matrix.csv").then(showData);

function showData(matrix) {
  var data = [];
  for (var i = 0; i < matrix.length; ++i) {
    let y = 0;
    for (const [key, value] of Object.entries(matrix[i])) {
      if (key == "") continue;
      let temp = {x: 0, y: 0, a: 0, v: 0};
      temp.x = i;
      temp.y = y;
      temp.a = Math.abs(value);
      temp.v = value;
      data.push(temp);
      y++;
    }
  }
  makeChart(data);
}

function makeChart(data) {
  var heatmap = new Chart('chart5', {
    type: 'heatmap',
    data: {
      xLabels: ['Age of Subject',
          'Time spent on Online Class',
          'Time spent on self study',
          'Time spent on fitness',
          'Time spent on sleep',
          'Time spent on social media',
          'Time spent on TV',
          'Number of meals per day'],
      yLabels: ['Age of Subject',
          'Time spent on Online Class',
          'Time spent on self study',
          'Time spent on fitness',
          'Time spent on sleep',
          'Time spent on social media',
          'Time spent on TV',
          'Number of meals per day'],
      datasets: [{
        data: data,
      }]
    },
    options: {
      yColors: [ // colors for each lines
          {r: 0,   g: 150, b: 136},
          {r: 0,   g: 150, b: 136},
          {r: 0,   g: 150, b: 136},
          {r: 0,   g: 150, b: 136},
          {r: 0,   g: 150, b: 136},
          {r: 0,   g: 150, b: 136},
          {r: 0,   g: 150, b: 136},
          {r: 0,   g: 150, b: 136},
      ],
    }
  });
}