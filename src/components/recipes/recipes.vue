<template>
  <div id="recipes"></div>
</template>

<script>
const data = require("../../data/artifacts.json");
let recipes = document.getElementById("recipes");
for (let i = 0; i < data.length; i++) {
  // create div to house a group of artifact recipes
  let artifactGrp = document.createElement("div");
  artifactGrp.setAttribute("class", "artifactGrp");
  // artifact group name
  let type = document.createElement("h2");
  type.innerText = data[0].type;
  artifactGrp.appendChild(type);

  for (let j = 0; j < data.artifacts.length; j++) {
    // div for each recipe
    let recipe = document.createElement("div");
    recipe.setAttribute("class", "recipe");
  }

  recipes.appendChild(artifactGrp);
}
export default {
  name: "recipes",
};
</script>


<style>
.recipe {
  display: flex;
  justify-content: flex-end;
  background-color: #4c4c4c;
  margin: 1rem;
  border-radius: 1rem;
  max-width: fit-content;
}
img {
  width: 3rem;
  height: 3rem;
}
p {
  margin-bottom: 0;
  font-size: 2rem;
}
</style>