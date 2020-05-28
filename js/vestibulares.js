const setCanvas = () => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Desempenho dos alunos em Hackatons',
                data: [1500, 2500, 5000, 8000],
                backgroundColor: 'rgba(234, 11, 11, 1)',
                borderColor: 'rgba(234, 11, 11, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    myChart.canvas.parentNode.style.height = '100%';
    myChart.canvas.parentNode.style.width = '100%';
}

const main = () => {
    setCanvas();
}

main();