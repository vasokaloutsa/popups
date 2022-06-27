<script>
import StepHeader from "./StepHeader.vue";
import SubjectLabel from "./SubjectLabel.vue";
import NavigationBtn from "./NavigationBtn.vue";


export default {
  name: "NotificationsOptions",
  data() {
    return {
      timePop: false,
      isOpenScrollPop: false,
      isOpenExitPop: false,
      additionalTime: 0,
    };
  },
  methods: {
    setTimer(event) {
      console.log(event.target.value);
    //   this.$router.push({ path: '/about', query: { time: `${event.target.value}` }})
    },
  },
  components: { StepHeader, SubjectLabel, NavigationBtn },
  
};
</script>

<template>
  <StepHeader
    title="3. Set your triggers and targeting to reach the right people at the right time"
  />
  <SubjectLabel title="Popup triggers" />
  <div class="flex">
    <!-- <input
      type="checkbox"
      true-value="isOpenTimePop"
      false-value="isOpenTimePop"
    /> -->
    <label for="timeSelection"> Show on a timer</label>
    <select
      id="timeSelection"
      name="timeSelection"
      class="form-control"
      @change="setTimer($event)"
    >
      <option value="1" default>1 minute</option>
      <option value="0.5">0.5 minute</option>
      <option value="60">1 hour</option>
    </select>
  </div>
  <div class="flex">
    <label for="scrollSelection"> Show after scrolling</label>
    <select
      @change="setScrollr($event)"
      id="scrollSelection"
      name="scrollSelection"
      class="form-control"
    >
      <option value="0.25">25%</option>
      <option value="0.5">50%</option>
      <option value="1">100%</option>
    </select>
  </div>
  <!-- <router-link :to="{path:'#/about',query:{id: 1}}">
     <NavigationBtn isForward href="#/about" title="Next" />
</router-link> -->

  <NavigationBtn isForward href="#/about" queries="time=3" title="Next" />
</template>

<style>
.flex {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
</style>
