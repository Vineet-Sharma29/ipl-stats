<template>
  <div>
    <div class="flex">
      <div class="w-1/3">
        <flash-card
          flashCardHeading="Total Sixes"
          flashCardIcon="../assets/six.png"
        />
      </div>
      <div class="w-1/3">
        <flash-card
          flashCardHeading="Total Wickets"
          flashCardIcon="../assets/wicket.png"
        />
      </div>
      <div class="w-1/3">
        <flash-card
          flashCardHeading="Total Fours"
          flashCardIcon="../assets/four.png"
        />
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-2/3">
        <graph-card />
      </div>
      <div class="w-1/3">
        <info-card />
      </div>
    </div>
  </div>
</template>

<script>
import FlashCard from "../components/FlasCard";
import GraphCard from "../components/GraphCard";
import InfoCard from "../components/InfoCard";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    "flash-card": FlashCard,
    "graph-card": GraphCard,
    "info-card": InfoCard
  }
};
</script>
