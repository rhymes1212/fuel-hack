// import chart.js
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// prepare canvas for the chart
<canvas id="myChart" width="400" height="400"></canvas>

<script>
    // your stock data
    let stockData = [
        { date: '2023-07-01', close: 100 },
        { date: '2023-07-02', close: 102 },
        { date: '2023-07-03', close: 105 },
        // ...
    ];

    // prepare the data for the chart.js
    let labels = stockData.map(d => d.date);
    let data = stockData.map(d => d.close);

    var ctx = document.getElementById('myChart').getContext('2d');

    // create the chart
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Stock Price',
                data: data,
                borderColor: 'rgba(75, 192, 192, 0.2)',
                backgroundColor: 'rgba(75, 192, 192, 0.05)',
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                }
            }
        }
    });
</script>

