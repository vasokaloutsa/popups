<script>
export default {
  name: "PopUpModal",
  props: {
    content: String,
  },
};
</script>

<template>
  <div class="popup">
    <h2>Hello!</h2>
    <p>
      {{ content }}
    </p>
  </div>
</template>

<style>
.popup {
  background-color: #d36666;
  width: 450px;
  padding: 30px 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  color: #fff;
  text-align: center;
}
.popup button {
  display: block;
  margin: 0 0 20px auto;
  background-color: transparent;
  font-size: 30px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
.popup p {
  font-size: 14px;
  text-align: justify;
  margin: 20px 0;
  line-height: 25px;
  color: #fff;
  text-align: center;
}
</style>
