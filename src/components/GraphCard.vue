<template>
  <div class="shadow-md mx-6">
    <div class="px-6 py-4">
      <div class="flex flex-wrap">
        <div class="flex flex-wrap mb-3">
          <button
            @click="getRunsData"
            class="border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal border border-blue"
            v-bind:class="[active == 0 ? activeClass : '']"
          >
            Most Runs
          </button>
          <button
            @click="getWicketData"
            class="border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal border border-blue"
            v-bind:class="[active == 1 ? activeClass : '']"
          >
            Most Wickets
          </button>
          <button
            @click="getFielderData"
            v-bind:class="[active == 2 ? activeClass : '']"
            class="border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal border border-blue"
          >
            Most Field Assist
          </button>
        </div>
      </div>
      <bar-graph
        v-if="isLoaded"
        :height="280"
        :chartData="datacollection"
        :legend="false"
      ></bar-graph>
    </div>
  </div>
</template>

<script>
import BarGraph from "./graphs/BarGraph";

export default {
  name: "GraphCard",
  props: {
    isLoaded: {
      type: Boolean,
      default: false
    },
    runsData: {
      type: Array,
      default: () => []
    },
    wicketsData: {
      type: Array,
      default: () => []
    },
    fielderData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      datacollection: null,
      active: 0,
      activeClass: "bg-blue-500"
    };
  },
  components: {
    "bar-graph": BarGraph
  },
  created() {
    this.setChartData(this.runsData);
  },
  methods: {
    getWicketData() {
      this.setChartData(this.wicketsData);
      this.active = 1;
    },

    getRunsData() {
      this.setChartData(this.runsData);
      this.active = 0;
    },

    getFielderData() {
      this.setChartData(this.fielderData);
      this.active = 2;
    },

    setChartData(values) {
      var labels = [],
        data = [];

      if (this.isLoaded) {
        for (var i = 0; i < values.length; i++) {
          labels.push(values[i]["label"]);
          data.push(values[i]["value"]);
        }
      }

      =

      this.datacollection = {
        labels: labels,
        datasets: [
          {
            backgroundColor: "#4299e1",
            data: data
          }
        ]
      };
    }
  }
};
</script>

<style scoped></style>
