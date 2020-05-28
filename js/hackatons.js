const setCanvas = () => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [{
                label: 'Desempenho dos alunos em Hackatons',
                data: [80, 82, 82, 83, 85, 85, 85, 86, 85, 86, 86, 88, 90],
                backgroundColor: 'rgba(85, 131, 247, 1)',
                borderColor: 'rgba(10, 66, 209, 1)',
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