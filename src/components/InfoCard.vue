<template>
  <div class="shadow-md mx-6">
    <div class="px-6 py-4 h-full">
      <div class="font-bold text-xl mb-2">Toss Decision and Wins</div>
      <pie-graph
        :height="280"
        :chart-data="chartData"
        :legend="false"
      ></pie-graph>
    </div>
  </div>
</template>
<script>
import PieGraph from "./graphs/PieGraph";

export default {
  name: "InfoGraph",
  props: {},
  components: {
    "pie-graph": PieGraph
  },
  data() {
    return {
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      }
    };
  }
};
</script>
<style scoped></style>
