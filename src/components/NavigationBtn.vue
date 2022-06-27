<script>
import BackArrow from "./icons/BackArrow.vue";
import ForwardBtn from "./icons/ForwardBtn.vue";
export default {
  name: "NavigationBtn",
  props: {
    isBackwards: Boolean,
    isForward: Boolean,
    title: String,
    href: String,
    queries: String,
  },
  computed: {
    classes() {
      if (this.isBackwards) {
        return "backBtn";
      }

      return "forwardBtn";
    },
  },
  components: { BackArrow, ForwardBtn },
  methods: {},
};
</script>

<template>
  <button :class="classes">
    <BackArrow v-if="isBackwards" />
    <span class="content">{{ title }}</span>
    <ForwardBtn v-if="isForward" />
  </button>
</template>

<style>
.forwardBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64px;
  min-height: 40px;
  border: none;
  cursor: pointer;
  background-color: rgb(127, 255, 144);
  margin: 16px;
  align-self: end;
}

.backBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 64px;
  min-height: 40px;
  border: none;
  background-color: rgb(112, 117, 113);
  margin: 16px;
  align-self: start;
}

.content {
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.arrow {
  color: rgb(255, 255, 255);
  border-left: 2px solid white;
  min-height: 40px;
}
</style>
