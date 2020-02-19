<template>
  <div class="shadow-md mx-6">
    <div class="px-6 py-4">
      <div class="flex flex-wrap">
        <div class="flex flex-wrap mb-3">
          <button
            class="text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal bg-blue-500 border border-blue text-blue hover:bg-blue hover:text-white"
          >
            Most Runs
          </button>
          <button
            class="border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal border border-blue text-blue hover:bg-blue"
          >
            Most Wickets
          </button>
          <button
            class="border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal border border-purple text-purple hover:bg-purple"
          >
            Most Six
          </button>
          <button
            class="border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal border border-blue text-blue hover:bg-blue"
          >
            Most Four
          </button>
          <button
            class="border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal border border-purple text-purple hover:bg-purple"
          >
            Most Catches
          </button>
        </div>
      </div>
      <bar-graph
        :height="280"
        :chart-data="datacollection"
        :legend="false"
      ></bar-graph>
    </div>
  </div>
</template>

<script>
import BarGraph from "./graphs/BarGraph";

export default {
  name: "GraphCard",
  props: [],
  components: {
    "bar-graph": BarGraph
  },
  data() {
    return {
      datacollection: null,
      isLoaded: false
    };
  },
  mounted() {
    this.setChartData();
    this.isLoaded = true;
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    setChartData() {
      let gradient = document
        .getElementById("bar-chart")
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, "rgba(0, 0,0, 0)");
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");

      this.datacollection = {
        labels: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt()
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    }
  }
};
</script>

<style scoped></style>
