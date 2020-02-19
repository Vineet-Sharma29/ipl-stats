<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "BarChart",
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: Object,
    legend: Boolean
  },

  data() {
    return {
      options: {
        showScale: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true,
                color: "#EEF0F4",
                borderDash: [5, 15]
              },
              categoryPercentage: 1,
              barPercentage: 0.4
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "#EEF0F4",
                borderDash: [5, 15]
              }
            }
          ]
        },
        tooltips: {
          backgroundColor: "#4F5565",
          titleFontStyle: "normal",
          titleFontSize: 18,
          bodyFontFamily: "'Proxima Nova', sans-serif",
          cornerRadius: 3,
          bodyFontColor: "#20C4C8",
          bodyFontSize: 14,
          xPadding: 14,
          yPadding: 14,
          displayColors: false,
          mode: "index",
          intersect: false,
          callbacks: {
            title: tooltipItem => {
              return `${tooltipItem[0].xLabel}`;
            },
            label: (tooltipItem, data) => {
              let dataset = data.datasets[tooltipItem.datasetIndex];
              let currentValue = dataset.data[tooltipItem.index];
              return `${currentValue.toLocaleString()}`;
            }
          }
        },
        legend: {
          display: this.legend
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
