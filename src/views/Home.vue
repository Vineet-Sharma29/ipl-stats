<template>
  <div>
    <div class="flex" v-if="isLoaded">
      <div class="w-1/3">
        <flash-card
          flashCardHeading="Total Sixes"
          flashCardIcon="https://cdn1.iconfinder.com/data/icons/cricket-sport/400/a_iconfinder_Iconography_-_Cricket-11-2-512.png"
          :flashCardVal="scores.score_6"
        />
      </div>
      <div class="w-1/3">
        <flash-card
          flashCardHeading="Total Fours"
          flashCardIcon="https://cdn1.iconfinder.com/data/icons/cricket-sport/400/a_iconfinder_Iconography_-_Cricket-13-2-512.png"
          :flashCardVal="scores.score_4"
        />
      </div>
      <div class="w-1/3">
        <flash-card
          flashCardHeading="Total Superovers"
          flashCardIcon="https://cdn2.iconfinder.com/data/icons/cricket-1/117/cricket-game-player-playing-007-512.png"
          :flashCardVal="totalSuperOvers"
        />
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-2/3">
        <div v-if="isLoaded">
          <graph-card
            :isLoaded="isLoaded"
            :runsData="runsData"
            :wicketsData="wicketsData"
            :fielderData="fielderData"
          />
        </div>
      </div>
      <div class="w-1/3">
        <div v-if="isLoaded">
          <info-card
            :pie="true"
            title="Toss Decision and Wins"
            :isLoaded="isLoaded"
            :data="tossData"
            :bkgColor="getRandomColors(Object.keys(tossData).length)"
          />
        </div>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-1/2">
        <div v-if="isLoaded">
          <info-card
            :doughnut="true"
            title="Bowling Hand"
            :isLoaded="isLoaded"
            :data="bowlingHandData"
            :bkgColor="getRandomColors(Object.keys(bowlingHandData).length)"
          />
        </div>
      </div>
      <div class="w-1/2">
        <div v-if="isLoaded">
          <info-card
            title="Batting Hand"
            :doughnut="true"
            :isLoaded="isLoaded"
            :data="battingHandData"
            :bkgColor="getRandomColors(Object.keys(battingHandData).length)"
          />
        </div>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-1/2">
        <div v-if="isLoaded">
          <info-card
            :radar="true"
            title="Extra Types"
            :isLoaded="isLoaded"
            :data="extraTypes"
            :bkgColor="getRandomColors(1)"
          />
        </div>
      </div>
      <div class="w-1/2">
        <div v-if="isLoaded">
          <info-card
            :polarArea="true"
            title="Dissimal Types"
            :isLoaded="isLoaded"
            :data="dissimalTypes"
            :bkgColor="getRandomColors(Object.keys(dissimalTypes).length)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlashCard from "../components/FlasCard";
import GraphCard from "../components/GraphCard";
import InfoCard from "../components/InfoCard";
import ipl from "../apis/ipl";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    "flash-card": FlashCard,
    "graph-card": GraphCard,
    "info-card": InfoCard
  },
  data() {
    return {
      runsData: null,
      wicketsData: null,
      fielderData: null,
      tossData: null,
      battingHandData: null,
      bowlingHandData: null,
      extraTypes: null,
      dissimalTypes: null,
      scores: null,
      totalSuperOvers: null,
      isLoaded: false
    };
  },
  mounted() {
    ipl.getStats().then(response => {
      this.runsData = response.data.runs_list;
      this.wicketsData = response.data.wickets_list;
      this.fielderData = response.data.fielders_list;
      this.tossData = response.data.decision;
      this.battingHandData = response.data.batting_hand;
      this.bowlingHandData = response.data.bowling_hand;
      this.scores = response.data.scores;
      this.extraTypes = response.data.extra_types;
      this.dissimalTypes = response.data.dissimal_type;
      this.totalSuperOvers = response.data.total_superovers;

      this.isLoaded = true;
    });
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (255 - 5 + 1)) + 5;
    },
    getRandomColors(n) {
      var bkgColor = [];
      for (var i = 0; i < n; i++) {
        bkgColor.push(
          "rgb(" +
            this.getRandomInt() +
            "," +
            this.getRandomInt() +
            "," +
            this.getRandomInt() +
            ")"
        );
      }
      return bkgColor;
    }
  }
};
</script>
