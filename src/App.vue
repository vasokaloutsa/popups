<template>
  <!--add title props so that components are reusable-->
  <component :is="currentView" />
</template>

<script>
import NotificationsOptions from "./components/NotificationsOptions.vue";
import AboutPage from "./components/AboutPage.vue";

const routes = {
  "/": NotificationsOptions,
  "/about": AboutPage,
};

export default {
  name: "App",
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  components: {
    NotificationsOptions,
    AboutPage,
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
