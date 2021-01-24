<template>
  <div id="app">
    <Recipe />
    <router-view />
  </div>
</template>


<script>
import Recipe from "./components/recipes/recipes";

export default {
  name: "app",
  components: {
    Recipe,
  },
};
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  background-color: #333333;
  align-items: center;
}
</style>