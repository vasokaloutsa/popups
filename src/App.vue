<template>
  <div class="mainContent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.mainContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid purple;
  margin: 16px;
}
</style>
