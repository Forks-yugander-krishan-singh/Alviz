const n = 80;

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Array.from({length: n}, () => ""),
      datasets: [
        {
          backgroundColor: "#3e95cd",
          data: Array.from({length: n}, () => Math.floor(Math.random()*n))
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Bubble Sort'
      }
    }
});

function* bubbleSort(a)
{
  var swapped;
  do {
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        swapped = true;

        yield;
      }
    }
  } while (swapped);
}

var s = bubbleSort(myChart.data.datasets[0].data);

function chartUpdate() {
  v = s.next()
  if (v.done) {
    clearInterval(id)
    return
  }
  myChart.update()
}

var id = setInterval(chartUpdate, 1);