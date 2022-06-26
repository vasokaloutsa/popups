<script>
export default {
  name:"SectionTheme",
   props: {
    title: String,
  },
};
</script>

<template>
  <div class="wrapper">
  <h3 class="title">
    {{ title }}
  </h3>
  </div>
</template>

<style>
.wrapper {
  color: white;
  background-color: purple;
  width: 80%;
  height: 50px;
  display: flex; /* add flexbox so that can automatically place items correclty for arabic layout*/ 
  align-items: center;
}

.title {
  padding: 16px 8px 16px;
  font-style: italic;
}
</style>
