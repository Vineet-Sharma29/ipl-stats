<script>
import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "PieChart",
  extends: Pie,
  mixins: [reactiveProp],
  props: {
    chartData: Object,
    legend: Boolean
  },

  data() {
    return {
      options: {
        hoverBorderWidth: 20,
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
