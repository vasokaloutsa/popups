<script>
export default {
  name: "TriggersBox",
  data() {
    return {
      isOpenPopUp: false,
      additionalTime: 0,
    };
  },
  methods: {
    setTimer(event) {
      console.log(event.target.value);
      const addTime = () => {
        this.isOpenPopUp = true;
        console.log(this.isOpenPopUp);
        clearTimeout();
      };
      // setTimeout(greet, 1000 * 60 * parseFloat(event.target.value));
      setTimeout(addTime, 1000 * 60 * parseFloat(event.target.value));
    },
  },
};
</script>

<template>
  <p v-if="isOpenPopUp">BRRRRRRRRRRR</p>
  <div class="flex">
    <!-- <input
      type="checkbox"
      true-value="isOpenPopUp"
      false-value="isOpenPopUp"
    /> -->
    <label for="timeSelection"> Show on a timer</label>
    <select
      id="timeSelection"
      name="timeSelection"
      class="form-control"
      @change="setTimer($event)"
    >
      <option value="1">1 minute</option>
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
</template>

<style>
.flex {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
</style>
