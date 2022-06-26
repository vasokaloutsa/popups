<script>
export default {
  name: "StepHeader",
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="titleWrapper">
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<style>
.titleWrapper {
  color: purple;
  width: 80%;
  text-align: center;
  margin: 8px 0 16px;
}
</style>
