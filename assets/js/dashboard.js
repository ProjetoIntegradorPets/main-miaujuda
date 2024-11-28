// ------------ FETCH
async function fetchData() {
  try {
    const response = await fetch('assets/php/dashboard.php');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Erro ao buscar os dados: ', error);
  }
}

fetchData().then(data => {
  const ta = document.getElementById('total_animais');
  ta.textContent = data.total_animais;
  
  const tc = document.getElementById('total_caes');
  tc.textContent = data.total_caes;
  
  const tg = document.getElementById('total_gatos');
  tg.textContent = data.total_gatos;

    
  // GRAFICO PIZZA
  const adoptionChartOptions = {
    series: [data.percentual_caes, data.percentual_gatos],
    chart: {
      type: 'pie',
      height: 350,
    },
    labels: ['Cães', 'Gatos'],
    colors: ['#f58c02', '#000000'],
    legend: {
      fontSize: '20px', //tamanho da legenda
      labels: {
        colors: '#000000',
      },
      position: 'bottom',
    },
    dataLabels: {
      style: {
        fontSize: '15px', //tamanho da porcentagem
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
      }
    }
  };


  const raca_nomes = [];
  const raca_total = [];

  data.racas_mais_doadas.forEach(e => {
    raca_total.push(e['total']);
    raca_nomes.push(e['raca']);
  });
  
  // GRAFICO BARRA
  const breedsChartOptions = {
    series: [{
      name: 'Quantidade',
      data: raca_total
    }],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: raca_nomes,
      labels: {
        style: {
          fontSize: '13px', //tamanho da legenda
          fontFamily: 'Montserrat, sans-serif',
        }
      }
    },
    yaxis: {
      title: {
        text: 'Quantidade',
        style: {
          fontSize: '18px', //tamanho legenda lateral
          fontFamily: 'Montserrat, sans-serif',
        }
      },
      labels: {
        style: {
          fontSize: '16px', //tamanho numero
          fontFamily: 'Montserrat, sans-serif',
        }
      }
    },
    colors: ['#f58c02'],
  };


  // Render the charts
  const adoptionChart = new ApexCharts(document.querySelector('#adoption-chart'), adoptionChartOptions);
  adoptionChart.render();

  const breedsChart = new ApexCharts(document.querySelector('#raça-chart'), breedsChartOptions);
  breedsChart.render();

});

