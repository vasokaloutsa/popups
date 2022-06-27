<script>
export default {
  name: "PopUpModal",
};
</script>

<template>
  <div class="popup">
    <button id="close">&times;</button>
    <h2>This Is The Title</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
      distinctio fugiat alias iure qui, commodi minima magni ullam aliquam
      dignissimos?
    </p>
  </div>
</template>

<style>
.popup {
  background-color: #582727;
  width: 450px;
  padding: 30px 40px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border-radius: 8px;
  /* display: none; */
  text-align: center;
}
.popup button {
  display: block;
  margin: 0 0 20px auto;
  background-color: transparent;
  font-size: 30px;
  color: #c5c5c5;
  border: none;
  outline: none;
  cursor: pointer;
}
.popup p {
  font-size: 14px;
  text-align: justify;
  margin: 20px 0;
  line-height: 25px;
}
</style>
