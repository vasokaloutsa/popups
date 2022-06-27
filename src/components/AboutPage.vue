<script>
import NavigationBtn from "./NavigationBtn";
export default {
  name: "AboutPage",
  components: { NavigationBtn },
  methods: {
    setTimer(event) {
      console.log(event.target.value);
      const addTime = () => {
        this.isOpenTimePop = true;
        console.log(this.isOpenTimePop);
        clearTimeout();
      };
      // setTimeout(greet, 1000 * 60 * parseFloat(event.target.value));
      setTimeout(addTime, 1000 * 60 * parseFloat(event.target.value));
    },
  }
};
</script>

<template>
  <div>Hello!</div>
  <NavigationBtn isBackwards href="#/" title="Back" />
</template>

<style></style>
