// Alpha Vantage API Key
const apiKey = "YOUR_ALPHA_VANTAGE_API_KEY"; // replace with your API key

// Fetch data from the API
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Prepare data for chart
        const stockData = data["Time Series (Daily)"];
        const labels = Object.keys(stockData).reverse();
        const values = labels.map(label => stockData[label]['4. close']);

        // Get the chart canvas
        const ctx = document.getElementById('myChart').getContext('2d');

        // Create the chart
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'IBM Stock Price',
                    data: values,
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
    })
    .catch(error => console.error('Error:', error));
