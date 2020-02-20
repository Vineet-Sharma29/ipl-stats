<template>
  <div class="shadow-md mx-6">
    <div class="px-6 py-4 h-full">
      <div class="font-bold text-xl mb-2">{{title}}</div>
      <pie-graph v-if="isLoaded && pie" :height="280" :chartData="datacollection" :legend="true"></pie-graph>
      <doughnut-graph
        v-if="isLoaded && doughnut"
        :height="280"
        :chartData="datacollection"
        :legend="true"
      />
      <radar-graph
        v-if="isLoaded && radar"
        :height="280"
        :chartData="datacollection"
        :legend="true"
      />
      <polar-area-graph
        v-if="isLoaded && polarArea"
        :height="280"
        :chartData="datacollection"
        :legend="true"
      />
    </div>
  </div>
</template>
<script>
import PieGraph from "./graphs/PieGraph";
import DoughnutGraph from "./graphs/DoughnutGraph";
import RadarGraph from "./graphs/RadarGraph";
import PolarAreaGraph from "./graphs/PolarAreaGraph";

export default {
  name: "InfoGraph",
  components: {
    "pie-graph": PieGraph,
    "doughnut-graph": DoughnutGraph,
    "radar-graph": RadarGraph,
    "polar-area-graph": PolarAreaGraph
  },
  props: {
    polarArea: {
      type: Boolean,
      default: false
    },
    radar: {
      type: Boolean,
      default: false
    },
    pie: {
      type: Boolean,
      default: false
    },
    doughnut: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    isLoaded: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    },
    bkgColor: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      datacollection: null
    };
  },
  created() {
    this.setChartData(this.data);
  },
  methods: {
    setChartData(values) {
      var labels = Object.keys(values),
        data = Object.values(values);

      this.datacollection = {
        hoverBorderWidth: 10,
        labels: labels,
        datasets: [
          {
            label: this.title,
            backgroundColor: this.bkgColor,
            data: data
          }
        ]
      };
    }
  }
};
</script>
<style scoped></style>
