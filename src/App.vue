<template>
  <!--add title props so that components are reusable-->
  <StepHeader
    title="3. Set your triggers and targeting to reach the right people at the right time"
  />
  <SectionTheme title="Popup triggers" />
  <TriggersBox/>
</template>

<script>
import SectionTheme from "./components/SectionTheme";
import StepHeader from "./components/StepHeader.vue";
import TriggersBox from "./components/TriggersBox.vue"
export default {
  name: "App",
  components: {
    SectionTheme,
    StepHeader,
    TriggersBox
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
