<script>
import StepHeader from "./StepHeader.vue";
import SubjectLabel from "./SubjectLabel.vue";
import NavigationBtn from "./NavigationBtn.vue";

export default {
  name: "NotificationsOptions",
  data() {
    return {
      timePop: String,
      scrollPop: String,
      queryParams: Object,
    };
  },
  methods: {
    setTimer(event) {
      this.timePop = event.target.value;
    },
    setScroll(event) {
      this.scrollPop = event.target.value;
    },
    setRouter() {
      this.queryParams = {
        time: this.timePop,
        scroll: this.scrollPop,
      };
      this.$router.push({ name: "About", query: this.queryParams });
    },
  },
  components: { StepHeader, SubjectLabel, NavigationBtn },
};
</script>

<template>
  <StepHeader
    title="3. Set your triggers and targeting to reach the right people at the right time"
  />
  <section class="optionsTable">
    <SubjectLabel title="Popup triggers" />
    <div class="flex">
      <label for="timeSelection"> Show on a timer</label>
      <select
        id="timeSelection"
        name="timeSelection"
        class="form"
        @change="setTimer($event)"
      >
        <option>--</option>
        <option value="0.05">5 seconds</option>
        <option value="0.5">30 seconds</option>
        <option value="1">1 minute</option>
      </select>
    </div>
    <div class="flex">
      <label for="scrollSelection"> Show after scrolling</label>
      <select
        @change="setScroll($event)"
        id="scrollSelection"
        name="scrollSelection"
        class="form"
      >
        <option>--</option>
        <option value="250">25%</option>
        <option value="500">50%</option>
        <option value="800">80%</option>
      </select>
    </div>
  </section>
  <NavigationBtn @click="setRouter" isForward title="Next" />
</template>

<style>
.flex {
  display: flex;
  justify-content: space-between;
  margin: 8px;
}

.form {
  width: 80px;
}

.optionsTable {
  height: 200px;
  width: 80%;
}
</style>
